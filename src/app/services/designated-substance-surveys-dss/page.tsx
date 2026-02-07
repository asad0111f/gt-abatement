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
  title: "Designated Substance Surveys in GTA, Ontario",
  description:
    "Designated Substance Surveys to determine hazardous materials in areas affected by renovation or demolition. Call to schedule a survey.",
  alternates: {
    canonical: "/services/designated-substance-surveys-dss",
  },
};

export default function DesignatedSubstanceSurveysPage() {
  return (
    <div>
      <LocalBusinessSchema />
      <ServiceSchema
        name="Designated Substance Surveys (DSS)"
        description="Surveys to determine the presence of designated substances and other hazardous materials in areas affected by renovation or demolition."
      />
      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Designated Substance Surveys (DSS)
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">
              Designated Substance Surveys (DSS)
            </h1>
            <p className="mt-6 text-base text-[var(--color-muted)] sm:text-lg">
              Surveys to determine the presence of Designated Substances and
              other hazardous materials in areas that will be disturbed or
              removed during renovation or demolition work.
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
              src={images.hero.containment}
              alt="Containment preparation for designated substance surveys"
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
              title="Survey-based identification of designated substances."
              description="GT Abatement Inc. provides the conduct of surveys to determine the presence, if any, of Designated Substances and other hazardous materials in areas that will be disturbed and or removed during renovation or demolition work."
            />
            <div className="mt-6 grid gap-4 text-sm text-[var(--color-muted)] lg:grid-cols-2">
              <p>
                The objective of the DSS is to determine the extent, if any, in
                which workers involved in the demolition work would be exposed
                to the above-noted substances, and accordingly, to comply with
                the provincial Act and Regulations.
              </p>
              <p>
                The owner of a property is obligated to submit the list of
                Designated Substances identified on the project site to all
                prospective Constructors.
              </p>
              <p>
                Related services:{" "}
                <a
                  href="/services/asbestos-management-programs"
                  className="text-[var(--color-accent)]"
                >
                  Asbestos Management Programs
                </a>{" "}
                and{" "}
                <a
                  href="/services/asbestos-abatement"
                  className="text-[var(--color-accent)]"
                >
                  Asbestos Abatement
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
              title="Legal disclosure and worker exposure requirements."
              description="Property owners must identify designated substances before construction and demolition work."
            />
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>Survey results determine worker exposure risks.</li>
              <li>Owners must submit the list of designated substances to constructors.</li>
              <li>Surveys are required to comply with provincial Acts and Regulations.</li>
            </ul>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Our Approach"
              title="Assessment, sampling, and prioritization."
              description="The scope includes assessing, sampling, and prioritizing areas requiring removal."
            />
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>
                Conduct an assessment for the presence of Designated Substances,
                including friable and non-friable ACM in accessible areas.
              </li>
              <li>
                Acquire bulk samples of suspected ACM and commission asbestos
                determination utilizing PLM with dispersion staining.
              </li>
              <li>Prioritize areas requiring removal of asbestos.</li>
            </ul>
            <div className="relative mt-8 h-48 overflow-hidden rounded-[24px] border border-[var(--color-border)]">
              <Image
                src={images.services.safetyHelmet}
                alt="Safety helmet used during designated substance surveys"
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
              title="Renovation and demolition projects."
              description="Surveys are required for areas that will be disturbed or removed during renovation or demolition."
            />
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>Building renovations affecting existing materials.</li>
              <li>Demolition work in existing facilities.</li>
              <li>Projects requiring constructor disclosure of designated substances.</li>
            </ul>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Compliance & Safety"
              title="Provincial Acts and Regulations."
              description="DSS supports compliance with the previously referenced provincial Act and Regulations."
            />
            <p className="mt-6 text-sm text-[var(--color-muted)]">
              Contact a service expert to plan your Designated Substance Survey.
            </p>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Call to Action"
              title="Schedule a DSS consultation."
              description="Request a site visit to plan the right survey scope."
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
