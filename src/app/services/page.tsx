import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedInView } from "@/components/AnimatedInView";
import { serviceRoutes } from "@/lib/routes";
import { images } from "@/lib/images";
import { ServiceAreaBlock } from "@/components/ServiceAreaBlock";
import { LocalSignalsBlock } from "@/components/LocalSignalsBlock";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Hazardous material abatement, designated substance testing, surveys, and bin rentals across the GTA. Call or request a site visit for compliant service.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const services = Array.isArray(serviceRoutes) ? serviceRoutes : [];

  return (
    <div>
      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <AnimatedInView>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Services
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">
              Hazardous Material Abatement &amp; Environmental Services
            </h1>
            <p className="mt-6 text-base text-[var(--color-muted)] sm:text-lg">
              We take pride in our 24-hour work ethic with planned or emergency
              site-visits available upon immediate request. GT Abatement Inc.
              will gladly provide a free on-site visitation to provide
              suggestions for the right course of action regarding your
              asbestos, lead and mold related concerns.
            </p>
            <p className="mt-6 text-sm text-[var(--color-muted)]">
              Communication and customer satisfaction are our number one
              priority. Contact one of our service experts today to book a site
              visit.
            </p>
          </AnimatedInView>
          <AnimatedInView delay={0.1}>
            <div className="relative h-72 overflow-hidden rounded-[28px] border border-[var(--color-border)]">
              <Image
                src={images.services.safetyHelmet}
                alt="Safety helmet and PPE for regulated abatement services"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-16">
          {services.length === 0 ? (
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-muted)]">
              Service listings are temporarily unavailable. Please contact us
              for assistance.
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elev)] p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                      GT
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-[var(--color-muted)]">
                    {service.description}
                  </p>
                  <a
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="py-12">
          <ServiceAreaBlock />
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <LocalSignalsBlock />
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions about on-site abatement."
              description="Short, compliance-focused answers."
            />
            <div className="mt-6">
              <FAQAccordion
                items={[
                  {
                    question: "When is professional abatement required?",
                    answer:
                      "When hazardous materials are present and must be contained, removed, and hauled under regulated procedures.",
                  },
                  {
                    question: "Do you provide on-site assessments?",
                    answer:
                      "Yes. We provide on-site visitation to recommend the right course of action.",
                  },
                  {
                    question: "Do you work on residential and commercial properties?",
                    answer:
                      "Yes. We support private home owners, contractors, and commercial facilities across the GTA.",
                  },
                ]}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Request a Visit"
              title="Book a free on-site visitation."
              description="GT Abatement Inc. will gladly provide a free on-site visitation to provide suggestions for the right course of action regarding your asbestos, lead and mold related concerns."
            />
            <div className="mt-6">
              <PrimaryButton label="Contact Us" href="/contact" />
            </div>
          </AnimatedInView>
          <AnimatedInView delay={0.1}>
            <ContactForm />
          </AnimatedInView>
        </Container>
      </section>
    </div>
  );
}
