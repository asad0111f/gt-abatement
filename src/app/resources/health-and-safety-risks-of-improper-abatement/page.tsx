import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Health and Safety Risks of Improper Abatement",
  description:
    "An informational overview of why regulated abatement procedures matter for safety and compliance.",
  alternates: {
    canonical: "/resources/health-and-safety-risks-of-improper-abatement",
  },
};

export default function ResourcePage() {
  return (
    <div>
      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Resources"
            title="Health and safety risks of improper abatement"
            description="Why regulated containment, removal, and haulage are required."
          />
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Core Explanation"
            title="Improper handling can expose occupants and workers to risk."
            description="Hazardous materials must be contained and removed under regulated procedures to prevent exposure and maintain compliance."
          />
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="When to Seek Professional Help"
            title="Regulated materials require professional assessment."
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
            title="Clarifying regulated abatement."
            description="Short corrections to common misunderstandings."
          />
          <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
            <li>Containment is required to prevent spread of hazardous material.</li>
            <li>Proper haulage and disposal are regulated steps, not optional.</li>
            <li>Assessment defines the correct abatement category and scope.</li>
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
            <Link
              href="/resources/understanding-asbestos-management-programs"
              className="text-[var(--color-accent)]"
            >
              Understanding Asbestos Management Programs
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
