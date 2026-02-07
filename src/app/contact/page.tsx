import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedInView } from "@/components/AnimatedInView";
import { siteConfig } from "@/lib/siteConfig";
import { PrimaryButton } from "@/components/PrimaryButton";
import { CallLink } from "@/components/CallLink";
import { ServiceAreaBlock } from "@/components/ServiceAreaBlock";
import { LocalSignalsBlock } from "@/components/LocalSignalsBlock";

export const metadata: Metadata = {
  title: "Request a Site Visit or Consultation – GTA",
  description:
    "Call or message GT Abatement Inc. to request an on-site visitation for compliant hazardous material services across the GTA.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">
              Request a Site Visit or Consultation
            </h1>
            <p className="mt-6 text-base text-[var(--color-muted)] sm:text-lg">
              Professional assessment and compliant handling for hazardous
              material concerns.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <PrimaryButton
                label={`Call Now ${siteConfig.phone}`}
                href={`tel:${siteConfig.phone}`}
                dataTrack="phone-click"
              />
              <p className="text-sm text-[var(--color-muted)]">
                Serving the Greater Toronto Area and Ontario.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <AnimatedInView className="space-y-6">
            <SectionHeading
              eyebrow="Primary Contact Options"
              title="Call first for urgent situations."
              description="We respond quickly to regulated hazardous material concerns."
            />
            <div className="space-y-3 text-sm text-[var(--color-muted)]">
              <CallLink
                phone={siteConfig.phone}
                className="block text-lg text-[var(--color-ink)]"
                location="contact-primary"
              >
                {siteConfig.phone}
              </CallLink>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-sm text-[var(--color-muted)]"
              >
                {siteConfig.email}
              </a>
              <p className="text-sm text-[var(--color-muted)]">
                Communication and customer satisfaction are our number one
                priority.
              </p>
              <div className="text-sm text-[var(--color-muted)]">
                Quick links:{" "}
                <a
                  href="/services/asbestos-abatement"
                  className="text-[var(--color-accent)]"
                >
                  Asbestos Abatement
                </a>
                ,{" "}
                <a
                  href="/services/mold-abatement"
                  className="text-[var(--color-accent)]"
                >
                  Mold Abatement
                </a>
                ,{" "}
                <a
                  href="/services/lead-abatement"
                  className="text-[var(--color-accent)]"
                >
                  Lead Abatement
                </a>
                .
              </div>
            </div>
          </AnimatedInView>
          <AnimatedInView delay={0.1}>
            <ContactForm />
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatedInView>
            <ServiceAreaBlock />
          </AnimatedInView>
          <AnimatedInView delay={0.05}>
            <LocalSignalsBlock />
          </AnimatedInView>
          <AnimatedInView delay={0.1}>
            <div className="h-64 rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface-elev)]" />
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Final CTA"
              title="If the situation is urgent, call now."
              description="Hazardous materials require a compliant plan and professional handling."
            />
            <p className="mt-4 text-sm text-[var(--color-muted)]">
              Phone: {siteConfig.phone}
            </p>
          </AnimatedInView>
          <AnimatedInView delay={0.1}>
            <PrimaryButton
              label={`Call Now ${siteConfig.phone}`}
              href={`tel:${siteConfig.phone}`}
              dataTrack="phone-click"
            />
          </AnimatedInView>
        </Container>
      </section>
    </div>
  );
}
