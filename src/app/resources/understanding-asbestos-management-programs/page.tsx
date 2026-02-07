import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Understanding Asbestos Management Programs",
  description:
    "A compliance-focused overview of why Asbestos Management Programs are required in Ontario.",
  alternates: {
    canonical: "/resources/understanding-asbestos-management-programs",
  },
};

export default function ResourcePage() {
  return (
    <div>
      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Resources"
            title="Understanding asbestos management programs"
            description="A plain-language explanation of AMP requirements and purpose."
          />
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Core Explanation"
            title="AMPs document procedures for ACM awareness and safety."
            description="An Asbestos Management Program outlines management and procedures regarding ACM and is required for buildings with known or suspected asbestos materials."
          />
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="When to Seek Professional Help"
            title="Professional assessment supports compliance."
            description="In situations involving regulated materials, professional assessment is required to ensure AMP compliance."
          />
          <p className="mt-4 text-sm text-[var(--color-muted)]">
            Related service:{" "}
            <Link
              href="/services/asbestos-management-programs"
              className="text-[var(--color-accent)]"
            >
              Asbestos Management Programs
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Common Misconceptions"
            title="Clarifying AMP requirements."
            description="Short corrections to common misunderstandings."
          />
          <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
            <li>AMPs are required for buildings with known or suspected ACM.</li>
            <li>AMPs provide awareness for staff, tenants, and workers.</li>
            <li>Compliance is required under Ontario Regulation 278/05.</li>
          </ul>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Related Resources"
            title="Continue learning"
            description="Additional compliance-focused references."
          />
          <div className="mt-6 grid gap-3 text-sm text-[var(--color-muted)]">
            <Link
              href="/resources/what-is-a-designated-substance-survey"
              className="text-[var(--color-accent)]"
            >
              What Is a Designated Substance Survey?
            </Link>
            <Link
              href="/resources/when-professional-asbestos-abatement-is-required"
              className="text-[var(--color-accent)]"
            >
              When Professional Asbestos Abatement Is Required
            </Link>
            <Link
              href="/resources/health-and-safety-risks-of-improper-abatement"
              className="text-[var(--color-accent)]"
            >
              Health and Safety Risks of Improper Abatement
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
