import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedInView } from "@/components/AnimatedInView";
import { LocalBusinessSchema } from "@/components/SchemaPlaceholders";
import { ServiceAreaBlock } from "@/components/ServiceAreaBlock";
import { LocalSignalsBlock } from "@/components/LocalSignalsBlock";
import { ReviewSourceBadge } from "@/components/ReviewSourceBadge";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Hazardous material abatement and environmental services across the GTA and Ontario. Call or request a site visit for compliant removal and disposal.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="bg-grid">
      <LocalBusinessSchema />
      <section className="relative min-h-[80vh] border-b border-[var(--color-border)]">
        <div className="absolute inset-0">
          <Image
            src={images.hero.containment}
            alt="Containment area at an industrial abatement site"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[rgba(11,15,18,0.7)]" />
        </div>
        <Container className="relative z-10 flex min-h-[80vh] items-center py-20">
          <div className="max-w-2xl text-center sm:text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Ministry of Labour compliant containment & haulage
            </p>
            <h1 className="mt-5 text-4xl font-semibold text-balance sm:text-5xl">
              Hazardous material abatement across the GTA and Ontario.
            </h1>
            <p className="mt-6 text-base text-[var(--color-muted)] sm:text-lg">
              We adhere to stringent laws to ensure safe containment and
              haulage of hazardous waste materials, with demolition and removal
              managed under one company.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
              <PrimaryButton label="Request Site Visit" href="/contact" />
              <PrimaryButton
                label={`Call Now ${siteConfig.phone}`}
                href={`tel:${siteConfig.phone}`}
                variant="ghost"
                dataTrack="phone-click"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="py-16">
          <SectionHeading
            eyebrow="What We Do"
            title="Abatement, remediation, testing, surveys, and bins."
            description="Service snapshot with quick access to dedicated pages."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Asbestos Abatement",
                detail: "Type 1, Type 2, and Type 3 abatement services.",
                href: "/services/asbestos-abatement",
              },
              {
                title: "Mold Remediation",
                detail: "Inspection, containment, removal, and treatment.",
                href: "/services/mold-abatement",
              },
              {
                title: "Lead Abatement",
                detail: "Strict containment and HEPA-equipped processes.",
                href: "/services/lead-abatement",
              },
              {
                title: "Designated Substance Testing",
                detail: "Sampling for mold spores or asbestos presence.",
                href: "/services/designated-substance-sample-testing",
              },
              {
                title: "DSS Surveys",
                detail: "Surveys for renovation and demolition planning.",
                href: "/services/designated-substance-surveys-dss",
              },
              {
                title: "Bin Rentals",
                detail: "20-40 yard bins, sealed or open top.",
                href: "/services/bin-rentals",
              },
            ].map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elev)] text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    GT
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
                <p className="mt-4 text-sm text-[var(--color-muted)]">
                  {service.detail}
                </p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Why GT Abatement"
              title="Compliance-first, safety-focused delivery."
              description="Compliance-focused processes with clear chain-of-custody."
            />
            <ul className="mt-6 space-y-4 text-sm text-[var(--color-muted)]">
              <li>Adhere to stringent laws set out by the Ministry of Labour.</li>
              <li>Safe containment and haulage of hazardous waste materials.</li>
              <li>Demolition, removal, and bin logistics under one company.</li>
              <li>
                24-hour work ethic with planned or emergency site visits upon
                immediate request.
              </li>
              <li>Communication and customer satisfaction are the priority.</li>
            </ul>
          </AnimatedInView>
          <AnimatedInView delay={0.1}>
            <div className="relative h-80 overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface-elev)]">
              <Image
                src={images.hero.technician}
                alt="Abatement technician wearing PPE on site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="py-16">
          <SectionHeading
            eyebrow="Our Process"
            title="From consultation to clearance."
            description="Structured steps to reduce risk and maintain compliance."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="relative h-40 overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src={images.hero.technician}
                alt="Technician preparing a compliant work area"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-40 overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src={images.hero.containment}
                alt="Containment setup for hazardous material removal"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-40 overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src={images.services.safetyHelmet}
                alt="Safety helmet and PPE used for regulated abatement work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            {[
              "Consultation",
              "Testing",
              "Containment",
              "Abatement",
              "Clearance",
            ].map((step, index) => (
              <AnimatedInView key={step} delay={index * 0.05}>
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-center text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  <p className="text-xs text-[var(--color-accent)]">
                    Step {index + 1}
                  </p>
                  <p className="mt-3 text-[var(--color-ink)]">{step}</p>
                </div>
              </AnimatedInView>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-16">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Coverage for property owners and contractors."
            description="Residential to industrial environments across the GTA."
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
        <Container className="py-16">
          <SectionHeading
            eyebrow="Trust & Credentials"
            title="Memberships and reviews."
            description="Third-party verification supported."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
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
            <div className="rounded-3xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
                Environmental Awareness
              </p>
              <p className="mt-4 text-sm text-[var(--color-muted)]">
                We adhere to the stringent laws set out by the Ministry of Labour
                to ensure the safe containment and haulage of hazardous waste
                materials.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Bin Rentals"
              title="An add-on service to simplify disposal."
              description="Sealed or open top bins for demolition and hazardous waste transport."
            />
          </AnimatedInView>
          <AnimatedInView delay={0.1}>
            <PrimaryButton label="View Bin Sizes" href="/services/bin-rentals" />
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Request a Site Visit"
              title="Urgent concerns need a compliant plan."
              description="We will gladly provide a free on-site visitation to provide suggestions for the right course of action regarding your asbestos, lead and mold related concerns."
            />
          </AnimatedInView>
          <AnimatedInView delay={0.1}>
            <ContactForm />
          </AnimatedInView>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)]">
        <Container className="grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatedInView>
            <ServiceAreaBlock />
          </AnimatedInView>
          <AnimatedInView delay={0.05}>
            <LocalSignalsBlock />
          </AnimatedInView>
          <AnimatedInView delay={0.1}>
            <div className="relative h-72 overflow-hidden rounded-[28px] border border-[var(--color-border)]">
              <Image
                src={images.hero.containment}
                alt="GTA service coverage with containment equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </AnimatedInView>
        </Container>
      </section>
    </div>
  );
}
