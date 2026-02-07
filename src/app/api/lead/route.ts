import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/siteConfig";

type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website?: string;
};

const rateLimitWindowMs = 60_000;
const rateLimitMax = 5;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function validateLead(data: LeadPayload) {
  const errors: string[] = [];
  if (!data.name || data.name.trim().length < 2) errors.push("name");
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.push("email");
  if (!data.phone || data.phone.trim().length < 7) errors.push("phone");
  if (!data.subject || data.subject.trim().length < 2) errors.push("subject");
  if (!data.message || data.message.trim().length < 10) errors.push("message");
  return errors;
}

async function appendLeadRecord(record: Record<string, unknown>) {
  const dir = path.join(process.cwd(), "data");
  const filePath = path.join(dir, "leads.jsonl");
  await fs.mkdir(dir, { recursive: true });
  await fs.appendFile(filePath, `${JSON.stringify(record)}\n`, "utf-8");
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("Missing SMTP environment variables.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const now = Date.now();
    const entry = rateLimitStore.get(ip);
    if (!entry || entry.resetAt < now) {
      rateLimitStore.set(ip, { count: 1, resetAt: now + rateLimitWindowMs });
    } else {
      entry.count += 1;
      if (entry.count > rateLimitMax) {
        return NextResponse.json(
          { ok: false, error: "Too many requests. Please try again soon." },
          { status: 429 }
        );
      }
    }

    const data = (await request.json()) as LeadPayload;

    if (data.website && data.website.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const errors = validateLead(data);
    if (errors.length) {
      return NextResponse.json(
        { ok: false, error: "Validation failed.", fields: errors },
        { status: 400 }
      );
    }

    const record = {
      ...data,
      receivedAt: new Date().toISOString(),
      ip,
      userAgent: request.headers.get("user-agent") || "",
    };

    await appendLeadRecord(record);

    const transporter = getTransporter();
    const fromEmail = process.env.MAIL_FROM || siteConfig.email;
    const businessEmail = process.env.MAIL_TO || siteConfig.email;

    const subjectLine = `New Lead: ${data.subject}`;
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Subject: ${data.subject}`,
      `Message: ${data.message}`,
      "",
      `Received: ${record.receivedAt}`,
      `IP: ${ip}`,
    ].join("\n");

    await transporter.sendMail({
      from: fromEmail,
      to: businessEmail,
      replyTo: data.email,
      subject: subjectLine,
      text: body,
    });

    if (process.env.MAIL_AUTOREPLY_ENABLED === "true") {
      await transporter.sendMail({
        from: fromEmail,
        to: data.email,
        subject: "We received your request",
        text:
          "Thank you for contacting GT Abatement Inc. A service expert will follow up shortly.",
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
