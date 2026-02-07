import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Educational resources on regulated hazardous material work, compliance requirements, and professional assessment.",
  alternates: {
    canonical: "/resources",
  },
};

const resources = [
  {
    href: "/resources/when-professional-asbestos-abatement-is-required",
    title: "When Professional Asbestos Abatement Is Required",
  },
  {
    href: "/resources/mold-remediation-vs-mold-removal",
    title: "Mold Remediation vs. Mold Removal",
  },
  {
    href: "/resources/what-is-a-designated-substance-survey",
    title: "What Is a Designated Substance Survey?",
  },
  {
    href: "/resources/understanding-asbestos-management-programs",
    title: "Understanding Asbestos Management Programs",
  },
  {
    href: "/resources/health-and-safety-risks-of-improper-abatement",
    title: "Health and Safety Risks of Improper Abatement",
  },
];

export default function ResourcesPage() {
  return (
    <div>
      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Resources"
            title="Educational guidance on regulated abatement."
            description="Compliance-focused explanations that support informed decisions."
          />
          <div className="mt-8 grid gap-4">
            {resources.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 text-sm text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
