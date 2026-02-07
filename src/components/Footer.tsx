import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/siteConfig";
import { CallLink } from "@/components/CallLink";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-muted)]">
            {siteConfig.name}
          </p>
          <p className="text-sm text-[var(--color-muted)]">
            {siteConfig.tagline}
          </p>
          <p className="text-xs text-[var(--color-muted)]">
            Serving the Greater Toronto Area and surrounding Ontario regions.
          </p>
        </div>
        <div className="space-y-3 text-sm text-[var(--color-muted)]">
          <p>{siteConfig.address.street}</p>
          <p>
            {siteConfig.address.city}, {siteConfig.address.region}{" "}
            {siteConfig.address.postalCode}
          </p>
          <p>Area of Operation: {siteConfig.areaOfOperation}</p>
        </div>
        <div className="space-y-3 text-sm text-[var(--color-muted)]">
          <CallLink phone={siteConfig.phone} className="block" location="footer">
            {siteConfig.phone}
          </CallLink>
          <a href={`mailto:${siteConfig.email}`} className="block">
            {siteConfig.email}
          </a>
          <Link href="/contact" className="block">
            Contact Us
          </Link>
        </div>
      </Container>
    </footer>
  );
}
