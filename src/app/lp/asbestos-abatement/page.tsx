import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ContactForm } from "@/components/ContactForm";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Asbestos Abatement – Request a Site Visit",
  description:
    "Type 1, Type 2 and Type 3 asbestos abatement with compliant containment and haulage. Call now to request a site visit.",
  alternates: {
    canonical: "/lp/asbestos-abatement",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AsbestosLandingPage() {
  return (
    <div>
      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold text-balance sm:text-5xl">
              Asbestos Abatement with regulated containment and haulage
            </h1>
            <p className="mt-4 text-base text-[var(--color-muted)] sm:text-lg">
              We specialize in Type 1, Type 2 and Type 3 asbestos abatement as
              recognized by the Ministry of Environment.
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
              src={images.hero.containment}
              alt="Containment area for asbestos abatement"
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
            title="Asbestos must be handled under regulated procedures."
            description="Hazardous substances require safe containment and haulage under stringent laws."
          />
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Why Professional Abatement Is Required"
            title="Regulations, containment, clearance, disposal."
            description="Abatement work must comply with legal requirements for hazardous materials."
          />
          <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
            <li>Work must adhere to laws and regulations for hazardous waste.</li>
            <li>Containment and removal are managed under one company.</li>
            <li>Proper disposal and haulage are required by law.</li>
            <li>On-site consultation determines the right course of action.</li>
          </ul>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Our Approach"
            title="A controlled, compliance-first workflow."
            description="From consultation to disposal, each step is handled under regulated procedures."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {["Consultation", "Sampling", "Containment", "Abatement & Haulage"].map(
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
            description="We support private home owners, contractors, and commercial facilities across the GTA."
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
              title="Get a compliant abatement plan."
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
