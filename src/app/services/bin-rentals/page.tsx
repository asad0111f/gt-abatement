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
  title: "Bin Rentals for Hazardous Waste in GTA, Ontario",
  description:
    "20-40 yard bin rentals including sealed or open top options for demolition and hazardous waste. Call to select the right bin.",
  alternates: {
    canonical: "/services/bin-rentals",
  },
};

export default function BinRentalsPage() {
  return (
    <div>
      <LocalBusinessSchema />
      <ServiceSchema
        name="Bin Rentals"
        description="20-40 yard bins, sealed or open top, with quick and seamless rental support."
      />
      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Bin Rentals
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">
              Bin Rentals
            </h1>
            <p className="mt-6 text-base text-[var(--color-muted)] sm:text-lg">
              GT Abatement Inc. is your source for quick and seamless bin
              rentals in a variety of sizes.
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
              src={images.services.safetyHelmet}
              alt="Safety equipment for compliant bin rentals"
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
              title="Seamless bin rentals matched to scope."
              description="Providing bins is a seamless, quick and efficient process that we offer at GT Abatement Inc."
            />
            <div className="mt-6 grid gap-4 text-sm text-[var(--color-muted)] lg:grid-cols-2">
              <p>
                A variety of bin scales are at our disposal for rental, ranging
                from 20-40 yard bins.
              </p>
              <p>
                Our bins are specialized and vary depending on the scope of work
                required. For general demolition purposes we can provide open
                topped bins for easy disposal and quick transport.
              </p>
              <p>
                Hazardous substances, like asbestos, require sealed bins by law.
                With these contained bins, GT Abatement Inc. adheres to the rules
                and regulations set out to ensure the proper and safe haulage of
                hazardous waste materials.
              </p>
              <p>
                Related service:{" "}
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
              title="Hazardous waste requires compliant haulage."
              description="Hazardous substances, like asbestos, require sealed bins by law."
            />
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>Sealed bins are required by law for hazardous substances.</li>
              <li>Open topped bins are used for general demolition purposes.</li>
              <li>Proper haulage follows rules and regulations for hazardous waste.</li>
            </ul>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Our Approach"
              title="Sealed vs. open top bins."
              description="Our bins are specialized and vary depending on the scope of work required."
            />
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elev)] p-5 text-sm text-[var(--color-muted)]">
                <p className="text-[var(--color-ink)]">Sealed Bins</p>
                <p className="mt-3">
                  Required by law for hazardous substances such as asbestos.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elev)] p-5 text-sm text-[var(--color-muted)]">
                <p className="text-[var(--color-ink)]">Open Top Bins</p>
                <p className="mt-3">
                  Used for general demolition purposes for easy disposal and quick transport.
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elev)] p-5 text-sm text-[var(--color-muted)]">
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
                Size Guidance
              </p>
              <p className="mt-3">
                Bin sizes range from 20-40 yards depending on the scope of work required.
              </p>
            </div>
            <div className="relative mt-8 h-48 overflow-hidden rounded-[24px] border border-[var(--color-border)]">
              <Image
                src={images.hero.containment}
                alt="Sealed containment used for hazardous waste transport"
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
              title="Demolition and hazardous waste projects."
              description="Bins are matched to demolition scope and hazardous waste requirements."
            />
            <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
              <li>General demolition disposal.</li>
              <li>Hazardous waste requiring sealed containment.</li>
              <li>Projects needing safe haulage of hazardous materials.</li>
            </ul>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-12">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Compliance & Safety"
              title="Proper and safe haulage."
              description="GT Abatement Inc. adheres to the rules and regulations set out to ensure the proper and safe haulage of hazardous waste materials."
            />
            <p className="mt-6 text-sm text-[var(--color-muted)]">
              In Ontario, asbestos will be disposed of in accordance with Environmental
              Protection Act: Regulation 347.
            </p>
          </AnimatedInView>
        </Container>
      </section>

      <section className="border-b border-[var(--color-border)]">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <AnimatedInView>
            <SectionHeading
              eyebrow="Call to Action"
              title="Call for the right bin selection."
              description="To find out which bin and size might be right for you, contact us to discuss the choices with one of our service experts."
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
