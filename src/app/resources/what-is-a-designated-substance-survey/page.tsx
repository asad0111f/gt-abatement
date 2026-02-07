import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "What Is a Designated Substance Survey?",
  description:
    "A plain-language overview of DSS objectives and when professional surveys are required.",
  alternates: {
    canonical: "/resources/what-is-a-designated-substance-survey",
  },
};

export default function ResourcePage() {
  return (
    <div>
      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Resources"
            title="What is a designated substance survey?"
            description="An overview of how surveys support compliance during renovation and demolition."
          />
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Core Explanation"
            title="DSS identifies designated substances before work begins."
            description="The objective of a DSS is to determine the presence of designated substances in areas that will be disturbed during renovation or demolition, and to comply with provincial requirements."
          />
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="When to Seek Professional Help"
            title="Professional assessment supports compliance."
            description="In situations involving regulated materials, professional assessment is required to determine the correct scope."
          />
          <p className="mt-4 text-sm text-[var(--color-muted)]">
            Related service:{" "}
            <Link
              href="/services/designated-substance-surveys-dss"
              className="text-[var(--color-accent)]"
            >
              Designated Substance Surveys (DSS)
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Common Misconceptions"
            title="Clarifying DSS requirements."
            description="Short corrections to common misunderstandings."
          />
          <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
            <li>DSS is required before renovation or demolition work.</li>
            <li>Owners must provide designated substance lists to constructors.</li>
            <li>Survey scope includes accessible areas and sampling.</li>
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
