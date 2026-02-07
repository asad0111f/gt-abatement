import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ContactForm } from "@/components/ContactForm";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Lead Abatement – Request a Site Visit",
  description:
    "Lead abatement with strict containment and HEPA-equipped apparatuses. Call now to request a site visit.",
  alternates: {
    canonical: "/lp/lead-abatement",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function LeadLandingPage() {
  return (
    <div>
      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold text-balance sm:text-5xl">
              Lead Abatement with strict containment and HEPA equipment
            </h1>
            <p className="mt-4 text-base text-[var(--color-muted)] sm:text-lg">
              Lead abatement involves encapsulation to contain disturbed
              substances and mitigate harmful lead dust and fibers.
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
              alt="Technician handling lead abatement safety procedures"
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
            title="Lead dust must be contained and controlled."
            description="Strict containment and HEPA-equipped apparatuses are used to mitigate harmful lead dust and fibers."
          />
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Why Professional Abatement Is Required"
            title="Regulated containment and removal."
            description="Lead is a designated hazardous substance requiring stringent operations."
          />
          <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
            <li>Encapsulation prevents contamination of other areas.</li>
            <li>HEPA equipment mitigates harmful dust and fibers.</li>
            <li>Removal can involve surface demolition or paint removal.</li>
            <li>Site consultation and testing clarify lead concerns.</li>
          </ul>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Our Approach"
            title="Containment, removal, and cleanup."
            description="A compliance-first workflow for safe lead removal."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {["Containment", "Removal", "HEPA Control", "Cleanup"].map((step) => (
              <div
                key={step}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elev)] p-4 text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]"
              >
                {step}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Who We Help"
            title="Residential, commercial, and industrial properties."
            description="Lead was used in paints throughout many homes in Ontario."
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
