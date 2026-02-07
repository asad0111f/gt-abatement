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
  title: "Mold Remediation in GTA, Ontario",
  description:
    "Mold remediation services including inspection, encapsulation, removal, treatment, and sampling. Call for a compliant site visit.",
  alternates: {
    canonical: "/services/mold-abatement",
  },
};

export default function MoldAbatementPage() {
  return (
    <div>
      <LocalBusinessSchema />
      <ServiceSchema
        name="Mold Remediation and Abatement"
        description="Inspection, encapsulation, removal, treatment, and sampling services for mold concerns."
      />
      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Mold Remediation & Abatement
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">
              Mold Remediation &amp; Abatement
            </h1>
            <p className="mt-6 text-base text-[var(--color-muted)] sm:text-lg">
              Let GT Abatement Inc. help you rid your spaces of mold with our
              remediation services.
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
          <AnimatedInView>
            <SectionHeading
              eyebrow="What This Service Is"
              title="Inspection, encapsulation, removal, and treatment."
              description="The remediation of mold requires a thorough inspection of the contaminated area, followed by an encapsulation of the workspace for removal."
            />
            <div className="mt-6 grid gap-4 text-sm text-[var(--color-muted)] lg:grid-cols-2">
              <p>
                Containing the mold and removing it, followed by treatment,
                allows us to ensure that the re-spread of mold throughout the
                space is negated in its entirety.
              </p>
              <p>
                By ensuring that the workspace is dry post-abatement, further
                mold growth will be nullified.
              </p>
              <p>
                We also offer sampling services if you are unsure if an area may
                contain mold spores within the air or upon surfaces.
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
              title="Mold contamination needs controlled remediation."
              description="Acting fast and effectively is the key to preventing the further spread of mold."
            />
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>
                Containment and encapsulation are required to prevent re-spread
                throughout the space.
              </li>
              <li>
                Proper drying and treatment are required to mitigate recurrence.
              </li>
              <li>
                Contact a service expert to determine the right course of action.
              </li>
            </ul>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Our Approach"
              title="Containment, removal, treatment."
              description="Containing the mold and removing it, followed by treatment, ensures the re-spread is negated."
            />
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>Thorough inspection of the contaminated area.</li>
              <li>Encapsulation of the workspace for removal.</li>
              <li>Removal, treatment, and drying to nullify further growth.</li>
              <li>Sampling available if mold spores are suspected.</li>
            </ul>
            <div className="relative mt-8 h-48 overflow-hidden rounded-[24px] border border-[var(--color-border)]">
              <Image
                src={images.services.safetyHelmet}
                alt="Safety PPE used for mold containment work"
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
              title="Home or workplace settings."
              description="Mold contamination can impact residential and workplace environments."
            />
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>Home settings where moisture and musty smells persist.</li>
              <li>Workplace settings with contaminated areas.</li>
              <li>Areas where moisture tends to collect such as under sinks, bathrooms, or attic crawlspaces.</li>
            </ul>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Compliance & Safety"
              title="Controlled containment and removal."
              description="Containing the mold and removing it, followed by treatment, allows us to ensure that the re-spread of mold is negated."
            />
            <p className="mt-6 text-sm text-[var(--color-muted)]">
              GT Abatement Inc. will gladly provide a free on-site visitation to
              provide suggestions for the right course of action regarding your
              mold related concerns.
            </p>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Call to Action"
              title="Request a site visit today."
              description="If you feel as though you may have mold growth within your home, contact the experts at GT Abatement Inc."
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
