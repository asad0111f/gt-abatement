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
  title: "Lead Abatement in GTA, Ontario",
  description:
    "Lead abatement with strict containment, encapsulation, and HEPA-equipped apparatuses. Call for professional consultation.",
  alternates: {
    canonical: "/services/lead-abatement",
  },
};

export default function LeadAbatementPage() {
  return (
    <div>
      <LocalBusinessSchema />
      <ServiceSchema
        name="Lead Abatement"
        description="Lead abatement involving strict containment, encapsulation, and HEPA-equipped apparatuses."
      />
      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Lead Abatement
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">
              Lead Abatement
            </h1>
            <p className="mt-6 text-base text-[var(--color-muted)] sm:text-lg">
              GT Abatement Inc. uses strict processes to treat and remove lead
              from spaces and surfaces.
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
          <AnimatedInView>
            <SectionHeading
              eyebrow="What This Service Is"
              title="Encapsulation, removal, and control of lead dust."
              description="The treatment and removal of lead is a streamlined and safe practice that we at GT Abatement Inc. provide utilizing the stringent operations required for the handling of any designated hazardous substance."
            />
            <div className="mt-6 grid gap-4 text-sm text-[var(--color-muted)] lg:grid-cols-2">
              <p>
                Lead abatement involves the encapsulation of the workspace to
                create an environment wherein the substances that are disturbed
                are contained and pose no risk of contaminating other areas of
                the workspace.
              </p>
              <p>
                After containment is completed the removal process can be
                broken down to either the demolition of the work surface
                containing the lead or the removal of just the paint itself if
                the surface must be maintained.
              </p>
              <p>
                Both services are done under strict containment and
                encapsulated conditions utilizing HEPA equipped apparatuses to
                mitigate the spread of harmful lead dust and fibers.
              </p>
              <p>
                Related service:{" "}
                <a
                  href="/services/designated-substance-sample-testing"
                  className="text-[var(--color-accent)]"
                >
                  Designated Substance Sample Testing
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
              title="Strict containment is required."
              description="Lead abatement requires stringent operations for handling designated hazardous substances."
            />
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>
                Encapsulation creates an environment where disturbed substances
                are contained and do not contaminate other areas.
              </li>
              <li>
                HEPA equipped apparatuses are used to mitigate harmful lead dust
                and fibers.
              </li>
              <li>Site consultation and testing can shed light on lead concerns.</li>
            </ul>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Our Approach"
              title="Containment, removal, and surface protection."
              description="Removal can involve demolition of the work surface or paint removal if the surface must be maintained."
            />
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>Encapsulation of the workspace for containment.</li>
              <li>Removal of lead-affected surfaces or paint.</li>
              <li>HEPA equipped apparatuses to mitigate dust and fibers.</li>
            </ul>
            <div className="relative mt-8 h-48 overflow-hidden rounded-[24px] border border-[var(--color-border)]">
              <Image
                src={images.services.safetyHelmet}
                alt="Protective equipment used for lead abatement"
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
              title="Homes and workspaces with lead concerns."
              description="Lead was utilized in paints throughout many homes in Ontario."
            />
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>Homes with older paint systems in Ontario.</li>
              <li>Workspaces where lead paint may be disturbed.</li>
              <li>Projects involving demolition or sanding of painted surfaces.</li>
            </ul>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Compliance & Safety"
              title="Designated hazardous substance handling."
              description="Strict containment and encapsulated conditions are required for safe lead abatement."
            />
            <p className="mt-6 text-sm text-[var(--color-muted)]">
              If you are unsure about the presence of lead within your home, or
              have questions regarding paints that may contain lead, feel free
              to contact one of our service experts.
            </p>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Call to Action"
              title="Request a consultation."
              description="Site consultation and testing can shed light upon your lead concerns."
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
