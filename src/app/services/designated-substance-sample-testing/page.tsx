import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedInView } from "@/components/AnimatedInView";
import { ContactForm } from "@/components/ContactForm";
import { LocalBusinessSchema, ServiceSchema } from "@/components/SchemaPlaceholders";
import { PrimaryButton } from "@/components/PrimaryButton";
import { siteConfig } from "@/lib/siteConfig";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Designated Substance Testing in GTA, Ontario",
  description:
    "Sampling services for mold spores and asbestos presence in air or materials. Call to request compliant testing.",
  alternates: {
    canonical: "/services/designated-substance-sample-testing",
  },
};

export default function DesignatedSubstanceSampleTestingPage() {
  return (
    <div>
      <LocalBusinessSchema />
      <ServiceSchema
        name="Designated Substance Sample Testing"
        description="Sampling services for mold spores in air or surfaces and asbestos presence in air or materials."
      />
      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Designated Substance Sample Testing
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">
              Designated Substance Sample Testing
            </h1>
            <p className="mt-6 text-base text-[var(--color-muted)] sm:text-lg">
              Sampling services for mold spores within the air or upon surfaces,
              and asbestos within the air or select materials that may be
              disturbed.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <PrimaryButton
                label={`Call Now ${siteConfig.phone}`}
                href={`tel:${siteConfig.phone}`}
                dataTrack="phone-click"
              />
              <PrimaryButton
                label="Request Site Visit"
                href="/contact"
                variant="ghost"
              />
            </div>
          </div>
          <div className="relative h-56 overflow-hidden rounded-[24px] border border-[var(--color-border)]">
            <Image
              src={images.services.safetyHelmet}
              alt="Safety PPE used during designated substance testing"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <AnimatedInView>
            <SectionHeading
              eyebrow="What This Service Is"
              title="Sampling for mold spores or asbestos presence."
              description="GT Abatement Inc. offers sampling services if you are unsure about mold spores within the air or upon surfaces, or the presence of asbestos within the air or a select material that could potentially be disturbed during a removal process."
            />
            <div className="mt-6 grid gap-4 text-sm text-[var(--color-muted)] lg:grid-cols-2">
              <p>
                Sampling services are available if you are unsure if an area may
                contain mold spores within the air or upon surfaces.
              </p>
              <p>
                Sampling services are also available for the presence of asbestos
                within the air or a select material that could potentially be
                disturbed during a removal process.
              </p>
              <p>
                Related services:{" "}
                <a
                  href="/services/asbestos-abatement"
                  className="text-[var(--color-accent)]"
                >
                  Asbestos Abatement
                </a>{" "}
                and{" "}
                <a
                  href="/services/mold-abatement"
                  className="text-[var(--color-accent)]"
                >
                  Mold Abatement
                </a>
                .
              </p>
            </div>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Why This Is Not a DIY Job"
              title="Sampling is required for the right course of action."
              description="Testing determines whether mold spores or asbestos are present before removal."
            />
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>Sampling identifies mold spores within air or surfaces.</li>
              <li>
                Sampling confirms asbestos presence in air or materials that
                could be disturbed during removal.
              </li>
              <li>Contact a service expert to interpret results and next steps.</li>
            </ul>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Our Approach"
              title="Sampling and guidance."
              description="Sampling services are offered to determine the right course of action."
            />
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>Air and surface sampling for mold spores.</li>
              <li>Material sampling for potential asbestos disturbance.</li>
              <li>Consultation to define next steps if results are positive.</li>
            </ul>
            <div className="relative mt-8 h-48 overflow-hidden rounded-[24px] border border-[var(--color-border)]">
              <Image
                src={images.hero.technician}
                alt="Technician preparing sampling equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Where This Is Required"
              title="Uncertain contamination conditions."
              description="Sampling is needed when you are unsure about the presence of mold or asbestos."
            />
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>Areas that may contain mold spores within the air or on surfaces.</li>
              <li>Materials that could be disturbed during removal processes.</li>
              <li>Project sites requiring clarity before abatement or remediation.</li>
            </ul>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Compliance & Safety"
              title="Sampling supports compliant decision-making."
              description="Sampling services help determine the right course of action for hazardous material concerns."
            />
            <p className="mt-6 text-sm text-[var(--color-muted)]">
              Contact one of our service experts to discuss sampling options
              for your project site.
            </p>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Call to Action"
              title="Request sampling support."
              description="Request a site visit to determine the right course of action."
            />
            <p className="mt-4 text-sm text-[var(--color-muted)]">
              Phone: {siteConfig.phone}
            </p>
          </AnimatedInView>
          <AnimatedInView delay={0.1}>
            <ContactForm />
          </AnimatedInView>
        </Container>
      </section>
    </div>
  );
}
