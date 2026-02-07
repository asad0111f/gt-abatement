import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Mold Remediation vs. Mold Removal",
  description:
    "A compliance-focused explanation of remediation versus removal in regulated environments.",
  alternates: {
    canonical: "/resources/mold-remediation-vs-mold-removal",
  },
};

export default function ResourcePage() {
  return (
    <div>
      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Resources"
            title="Mold remediation vs. mold removal"
            description="What the difference means in regulated, compliance-first work."
          />
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Core Explanation"
            title="Remediation involves inspection, containment, and treatment."
            description="The remediation of mold requires a thorough inspection of the contaminated area, followed by encapsulation for removal and treatment to prevent re-spread."
          />
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="When to Seek Professional Help"
            title="Professional assessment is required for regulated work."
            description="In situations involving regulated materials, professional assessment is required to determine the right course of action."
          />
          <p className="mt-4 text-sm text-[var(--color-muted)]">
            Related service:{" "}
            <Link
              href="/services/mold-abatement"
              className="text-[var(--color-accent)]"
            >
              Mold Abatement
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Common Misconceptions"
            title="Clarifying compliant mold work."
            description="Short corrections to common misunderstandings."
          />
          <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
            <li>Removal alone does not address re-spread risk.</li>
            <li>Encapsulation and treatment are part of remediation.</li>
            <li>Proper drying helps prevent further growth.</li>
            <li>On-site assessment guides the right response.</li>
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
              href="/resources/health-and-safety-risks-of-improper-abatement"
              className="text-[var(--color-accent)]"
            >
              Health and Safety Risks of Improper Abatement
            </Link>
            <Link
              href="/resources/when-professional-asbestos-abatement-is-required"
              className="text-[var(--color-accent)]"
            >
              When Professional Asbestos Abatement Is Required
            </Link>
            <Link
              href="/resources/what-is-a-designated-substance-survey"
              className="text-[var(--color-accent)]"
            >
              What Is a Designated Substance Survey?
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
