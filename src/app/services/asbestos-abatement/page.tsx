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
  title: "Asbestos Abatement in GTA, Ontario",
  description:
    "Type 1, Type 2 and Type 3 asbestos abatement with consultation, sampling, removal, and disposal. Call for a compliant site visit.",
  alternates: {
    canonical: "/services/asbestos-abatement",
  },
};

export default function AsbestosAbatementPage() {
  return (
    <div>
      <LocalBusinessSchema />
      <ServiceSchema
        name="Asbestos Abatement"
        description="Type 1, Type 2 and Type 3 asbestos abatement with consultation, sampling, removal, and disposal."
      />
      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Asbestos Abatement
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">
              Asbestos Abatement (Type 1, 2, and 3)
            </h1>
            <p className="mt-6 text-base text-[var(--color-muted)] sm:text-lg">
              We specialize in Type 1, Type 2 and Type 3 asbestos abatement as
              recognized by the Ministry of Environment.
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
          <AnimatedInView>
            <SectionHeading
              eyebrow="What This Service Is"
              title="Consultation, sampling, removal, and disposal."
              description="Dealing with the presence of asbestos can seem jarring but our service experts are here to help."
            />
            <div className="mt-6 grid gap-4 text-sm text-[var(--color-muted)] lg:grid-cols-2">
              <p>
                We will gladly provide an on-site visitation with no fee to
                discuss the right course of action for your asbestos related
                concerns.
              </p>
              <p>
                GT Abatement Inc. can provide sampling services that test for
                the presence of asbestos within the air or a select material
                that could potentially be disturbed during a removal process.
              </p>
              <p>
                For contractors, GT Abatement Inc. will provide an all-in-one
                package of removal, consultation and disposal, fully handling
                all asbestos related factors on site from start to finish.
              </p>
              <p>
                Related services:{" "}
                <a
                  href="/services/designated-substance-sample-testing"
                  className="text-[var(--color-accent)]"
                >
                  Designated Substance Sample Testing
                </a>{" "}
                and{" "}
                <a
                  href="/services/bin-rentals"
                  className="text-[var(--color-accent)]"
                >
                  Bin Rentals
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
              title="Hazardous material requires legal containment and haulage."
              description="Hazardous substances require safe containment and haulage under stringent laws."
            />
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>
                Asbestos removal must adhere to laws and regulations required to
                handle hazardous waste legally.
              </li>
              <li>
                Containment, removal, and haulage are managed under one company
                to maintain control of hazardous waste materials.
              </li>
              <li>
                Contact a service expert to determine the correct course of
                action for your site.
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
              title="Type-based abatement with controlled containment."
              description="GT Abatement Inc. specializes in the three main categories of asbestos removals."
            />
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elev)] p-5 text-sm text-[var(--color-muted)]">
                <p className="text-[var(--color-ink)]">
                  Type 1 – Asbestos Removal 1-10 sq feet
                </p>
                <p className="mt-3">
                  Small-scale jobs range from the removal of various asbestos
                  containing tiles to the disturbance of non-friable asbestos
                  materials.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elev)] p-5 text-sm text-[var(--color-muted)]">
                <p className="text-[var(--color-ink)]">Type 2 – 10-100 sq feet</p>
                <p className="mt-3">
                  Larger forms of friable asbestos containing material are
                  removed under more stringent operations, including pipe
                  wrapping and plaster.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elev)] p-5 text-sm text-[var(--color-muted)]">
                <p className="text-[var(--color-ink)]">
                  Type 3 – More than 100 sq feet
                </p>
                <p className="mt-3">
                  Large sections of a building or workspace are encapsulated
                  with chambers for safe clean work under Type 3 protocol.
                </p>
              </div>
            </div>
            <div className="relative mt-8 h-48 overflow-hidden rounded-[24px] border border-[var(--color-border)]">
              <Image
                src={images.services.safetyHelmet}
                alt="Safety helmet and PPE used during asbestos abatement"
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
              title="Renovations, commercial abatements, and contractor work."
              description="Service offerings range from small scale renovations to large scale commercial abatements."
            />
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>Small scale renovations.</li>
              <li>Large scale commercial abatements.</li>
              <li>Contractor projects requiring removal, consultation, and disposal.</li>
            </ul>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Compliance & Safety"
              title="Safe containment and legal haulage."
              description="We adhere to the stringent laws set out by the Ministry of Labour to ensure safe containment and haulage of hazardous waste materials."
            />
            <p className="mt-6 text-sm text-[var(--color-muted)]">
              For further inquiries regarding the specific laws and regulations
              required for any abatement company to handle hazardous waste
              legally, please feel free to contact one of our service experts.
            </p>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Call to Action"
              title="Book a site visit or call now."
              description="We will gladly provide an on-site visitation with no fee to discuss the right course of action for your asbestos related concerns."
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
