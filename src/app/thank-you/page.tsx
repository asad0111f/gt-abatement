import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/siteConfig";
import { CallLink } from "@/components/CallLink";

export const metadata: Metadata = {
  title: "Request Received",
  description:
    "We’ve received your request and will contact you shortly. For urgent concerns, call now.",
  alternates: {
    canonical: "/thank-you",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className="py-16">
        <SectionHeading
          eyebrow="Thank You"
          title="Request Received"
          description="We’ve received your request and will contact you shortly."
        />
        <div className="mt-8 space-y-4 text-sm text-[var(--color-muted)]">
          <CallLink
            phone={siteConfig.phone}
            className="inline-flex text-lg text-[var(--color-ink)]"
            location="thank-you"
          >
            Call {siteConfig.phone}
          </CallLink>
          <p>
            For urgent concerns, call now.
          </p>
          <p className="text-xs text-[var(--color-muted)]">
            If you’ve worked with us, feedback helps others make informed decisions.
          </p>
          <a href="/services" className="text-[var(--color-accent)]">
            Back to Services
          </a>
        </div>
      </Container>
    </section>
  );
}
