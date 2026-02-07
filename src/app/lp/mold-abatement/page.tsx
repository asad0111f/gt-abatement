import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ContactForm } from "@/components/ContactForm";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Mold Abatement – Request a Site Visit",
  description:
    "Mold remediation with inspection, containment, removal, and treatment. Call now to request a site visit.",
  alternates: {
    canonical: "/lp/mold-abatement",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function MoldLandingPage() {
  return (
    <div>
      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold text-balance sm:text-5xl">
              Mold Abatement with controlled containment and removal
            </h1>
            <p className="mt-4 text-base text-[var(--color-muted)] sm:text-lg">
              The remediation of mold requires a thorough inspection of the
              contaminated area, followed by an encapsulation of the workspace
              for removal.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <PrimaryButton
                label={`Call Now ${siteConfig.phone}`}
                href={`tel:${siteConfig.phone}`}
              />
              <PrimaryButton
                label="Request Site Visit"
                href="#lead-form"
                variant="ghost"
              />
            </div>
          </div>
          <div className="relative h-56 overflow-hidden rounded-[24px] border border-[var(--color-border)]">
            <Image
              src={images.hero.technician}
              alt="Technician inspecting a mold-affected area"
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
          <SectionHeading
            eyebrow="Problem Awareness"
            title="Mold spreads when not contained and treated."
            description="Containing the mold and removing it, followed by treatment, negates re-spread."
          />
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Why Professional Abatement Is Required"
            title="Containment, treatment, and compliance."
            description="Remediation requires inspection, encapsulation, removal, and treatment."
          />
          <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
            <li>Encapsulation prevents re-spread throughout the space.</li>
            <li>Removal and treatment are required to negate recurrence.</li>
            <li>Proper drying nullifies further mold growth.</li>
            <li>On-site visitation determines the right course of action.</li>
          </ul>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Our Approach"
            title="Inspection, encapsulation, treatment."
            description="A compliance-first workflow that prioritizes containment."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {["Inspection", "Encapsulation", "Removal", "Treatment & Drying"].map(
              (step) => (
                <div
                  key={step}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elev)] p-4 text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]"
                >
                  {step}
                </div>
              )
            )}
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Who We Help"
            title="Residential, commercial, and industrial properties."
            description="We support home and workplace settings across the GTA."
          />
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Trust Reinforcement"
            title="Memberships and reviews."
            description="HomeStars and EACC membership are displayed without ratings or claims."
          />
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="relative h-16 w-full">
              <Image
                src={images.sections.trust}
                alt="HomeStars verified logo"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative h-16 w-full">
              <Image
                src={images.sections.eacc}
                alt="Environmental Abatement Council of Canada logo"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section id="lead-form" className="border-b border-[var(--color-border)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Request a Site Visit"
              title="Get a compliant remediation plan."
              description="We will gladly provide an on-site visitation to recommend the right course of action."
            />
            <p className="mt-4 text-sm text-[var(--color-muted)]">
              Phone: {siteConfig.phone}
            </p>
          </div>
          <ContactForm />
        </Container>
      </section>
    </div>
  );
}
