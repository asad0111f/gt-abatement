import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedInView } from "@/components/AnimatedInView";
import { images } from "@/lib/images";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/siteConfig";
import { ReviewSourceBadge } from "@/components/ReviewSourceBadge";

export const metadata: Metadata = {
  title: "Hazardous Material Abatement Company – GTA",
  description:
    "GT Abatement Inc. provides rental disposal bins and abatement services across the GTA with a 24-hour work ethic. Call to discuss compliant service options.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              About GT Abatement
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">
              Professional Hazardous Material Abatement Specialists
            </h1>
            <p className="mt-6 text-base text-[var(--color-muted)] sm:text-lg">
              Here at GT Abatement, we adhere to the stringent laws set out by
              the Ministry of Labour to ensure the safe containment and haulage
              of all our hazardous waste materials.
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
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatedInView className="space-y-6">
            <SectionHeading
              eyebrow="Who We Are"
              title="Focused on abatement, containment, and compliant haulage."
              description="GT Abatement Inc. also helms a division solely focused on the demolition and removal of hazardous waste substances such as mold and asbestos."
            />
            <p className="text-sm text-[var(--color-muted)]">
              Our service offerings range from small scale renovations to large
              scale commercial abatements. All of the waste is hauled and
              removed from your site using our very own bins, allowing for fast
              and reliable transportation all under the umbrella of GT
              Abatement Inc.
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              GT Abatement Inc. is a leading provider of rental disposal bins
              all over the Greater Toronto Area and beyond for private home
              owners, contractors, and commercial facilities alike.
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              Related services:{" "}
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
            </p>
          </AnimatedInView>
          <AnimatedInView delay={0.1}>
            <div className="relative h-[320px] overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[var(--color-surface)]">
              <Image
                src={images.hero.technician}
                alt="GT Abatement technician in PPE on site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="What Makes Abatement Different"
            title="Regulated work with legal responsibilities."
            description="Hazardous waste removal requires compliance with stringent laws and safe containment."
          />
          <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
            <li>Hazardous substances require safe containment and haulage.</li>
            <li>Abatement work must comply with laws and regulations.</li>
            <li>Improper handling can expose occupants and workers to risk.</li>
            <li>Containment and removal are managed under one company.</li>
            <li>Specialized disposal uses sealed bins when required by law.</li>
          </ul>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionHeading
            eyebrow="Compliance & Safety Commitment"
            title="Ontario regulations, testing, containment, disposal."
            description="We adhere to the stringent laws set out by the Ministry of Labour to ensure the safe containment and haulage of all hazardous waste materials."
          />
          <div className="mt-6 grid gap-6 text-sm text-[var(--color-muted)] lg:grid-cols-2">
            <p>
              GT Abatement Inc. can provide sampling services that test for the
              presence of asbestos within the air or a select material that
              could potentially be disturbed during a removal process.
            </p>
            <p>
              With GT Abatement Inc., from start to finish you will know how
              your waste materials are being removed and hauled all under the
              same company.
            </p>
            <p>
              For further inquiries regarding the specific laws and regulations
              required for any abatement company to handle hazardous waste
              legally, please feel free to contact one of our service experts.
            </p>
            <p>
              In Ontario, asbestos is disposed of in accordance with the
              Environmental Protection Act: Regulation 347.
            </p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-[28px] border border-[var(--color-border)]">
            <Image
              src={images.about.brandShirt}
              alt="GT Abatement branded safety apparel"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Our Process"
            title="Consultation, sampling, containment, abatement, haulage."
            description="A controlled workflow to manage risk and compliance."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {[
              "Consultation",
              "Sampling",
              "Containment",
              "Abatement",
              "Haulage",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-center text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]"
              >
                <p className="text-[var(--color-accent)]">Step {index + 1}</p>
                <p className="mt-3 text-[var(--color-ink)]">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Industries We Support"
            title="Serving property owners and contractors."
            description="Work across residential, commercial, and industrial environments."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Residential",
              "Commercial",
              "Industrial",
              "Property Managers",
              "Construction / Renovation",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elev)] px-5 py-4 text-center text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <SectionHeading
            eyebrow="Trust Signals"
            title="Memberships and reviews."
            description="Third-party verification supported."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <ReviewSourceBadge
              label="HomeStars Reviews"
              imageSrc={images.sections.trust}
              imageAlt="HomeStars verified logo"
            />
            <ReviewSourceBadge
              label="EACC Membership"
              imageSrc={images.sections.eacc}
              imageAlt="Environmental Abatement Council of Canada logo"
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Call to Action"
              title="Hazardous material requires a compliant plan."
              description="Request a site visit to determine the right course of action for your asbestos, lead, or mold concerns."
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
