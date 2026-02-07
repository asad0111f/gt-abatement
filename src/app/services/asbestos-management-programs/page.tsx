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
  title: "Asbestos Management Programs in GTA, Ontario",
  description:
    "Asbestos Management Programs (AMP) outlining ACM procedures under Ontario regulation. Call for professional AMP development.",
  alternates: {
    canonical: "/services/asbestos-management-programs",
  },
};

export default function AsbestosManagementProgramsPage() {
  return (
    <div>
      <LocalBusinessSchema />
      <ServiceSchema
        name="Asbestos Management Programs"
        description="Management and procedures for Asbestos Containing Materials (ACM) required for buildings with known or suspected asbestos."
      />
      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Asbestos Management Programs
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">
              Asbestos Management Programs (AMP)
            </h1>
            <p className="mt-6 text-base text-[var(--color-muted)] sm:text-lg">
              The Asbestos Management Program (AMP) outlines management and
              procedures regarding Asbestos Containing Materials (ACM) and is
              required for buildings that have or are reasonably suspected to
              have asbestos containing materials.
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
              alt="Technician reviewing asbestos management documentation"
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
              title="A formal program for ACM management."
              description="The goal of the AMP is to provide awareness of occupiers and/or workers of any present or suspected asbestos containing material, and to ensure that all staff, tenants and/or workers proceed to use the site while practicing educated safety measures."
            />
            <div className="mt-6 grid gap-4 text-sm text-[var(--color-muted)] lg:grid-cols-2">
              <p>
                An Asbestos Management Plan is required by the Government of
                Ontario under Ontario Regulation 278/05: Asbestos on
                Construction Projects and in Buildings and Repair Operations
                for buildings that have or are reasonably suspected to have
                asbestos containing materials.
              </p>
              <p>
                If you would like to proceed with GT Abatement Inc. as your
                specialized asbestos consultant regarding the AMP, we will
                oversee the development of the Asbestos Management Plan.
              </p>
              <p>
                Related services:{" "}
                <a
                  href="/services/designated-substance-surveys-dss"
                  className="text-[var(--color-accent)]"
                >
                  Designated Substance Surveys (DSS)
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
              title="Required by Ontario regulation."
              description="AMPs are required for buildings with known or suspected ACM."
            />
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>AMPs are mandated under Ontario Regulation 278/05.</li>
              <li>Staff, tenants, and workers must be aware of ACM presence.</li>
              <li>Professional oversight ensures the AMP matches regulatory requirements.</li>
            </ul>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Our Approach"
              title="Documentation, site access, and planning."
              description="We oversee the development of the AMP in accordance with the Ministry of Ontario requirements."
            />
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>Building information, including floor plans.</li>
              <li>Any previous asbestos related documents.</li>
              <li>Access to the building site if more samples are required.</li>
              <li>A list of staff, tenants, and workers with access to ACM areas.</li>
            </ul>
            <div className="relative mt-8 h-48 overflow-hidden rounded-[24px] border border-[var(--color-border)]">
              <Image
                src={images.services.safetyHelmet}
                alt="PPE and documentation used for asbestos management planning"
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
              title="Buildings with known or suspected ACM."
              description="AMPs are required for buildings that have or are reasonably suspected to have ACM."
            />
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>Buildings with known asbestos containing materials.</li>
              <li>Buildings reasonably suspected to have ACM.</li>
              <li>Sites where staff, tenants, or workers may be exposed.</li>
            </ul>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Compliance & Safety"
              title="Ontario Regulation 278/05 requirements."
              description="AMPs are required by the Government of Ontario under Ontario Regulation 278/05."
            />
            <p className="mt-6 text-sm text-[var(--color-muted)]">
              When working with asbestos, it is important to abide by the
              regulations set by the Government of Ontario.
            </p>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Call to Action"
              title="Start your AMP with GT Abatement."
              description="Contact our service experts to begin planning your Asbestos Management Program."
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
