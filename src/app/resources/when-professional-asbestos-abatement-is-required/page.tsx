import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "When Professional Asbestos Abatement Is Required",
  description:
    "A compliance-focused overview of situations where asbestos work requires professional involvement.",
  alternates: {
    canonical: "/resources/when-professional-asbestos-abatement-is-required",
  },
};

export default function ResourcePage() {
  return (
    <div>
      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Resources"
            title="When professional asbestos abatement is required"
            description="An overview of regulated situations where professional assessment is required."
          />
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Core Explanation"
            title="Asbestos work is regulated and must follow strict procedures."
            description="Hazardous substances require safe containment and haulage under stringent laws. Abatement work must comply with regulations that govern removal and disposal."
          />
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="When to Seek Professional Help"
            title="Professional assessment is required for regulated materials."
            description="In situations involving regulated materials, professional assessment is required to determine the correct course of action."
          />
          <p className="mt-4 text-sm text-[var(--color-muted)]">
            Related service:{" "}
            <Link
              href="/services/asbestos-abatement"
              className="text-[var(--color-accent)]"
            >
              Asbestos Abatement
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Common Misconceptions"
            title="Clarifying regulated asbestos work."
            description="Short corrections to common misunderstandings."
          />
          <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
            <li>Asbestos removal is not standard renovation work.</li>
            <li>Containment and haulage are required by regulation.</li>
            <li>Assessment determines the correct abatement category.</li>
            <li>Disposal must follow regulated procedures.</li>
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
              href="/resources/understanding-asbestos-management-programs"
              className="text-[var(--color-accent)]"
            >
              Understanding Asbestos Management Programs
            </Link>
            <Link
              href="/resources/what-is-a-designated-substance-survey"
              className="text-[var(--color-accent)]"
            >
              What Is a Designated Substance Survey?
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
