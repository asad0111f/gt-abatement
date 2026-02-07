"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/Container";
import { PrimaryButton } from "@/components/PrimaryButton";
import { CallLink } from "@/components/CallLink";
import { siteConfig } from "@/lib/siteConfig";
import { siteRoutes } from "@/lib/routes";

const navLinks = [
  { href: siteRoutes.about, label: "About" },
  { href: siteRoutes.services, label: "Services" },
  { href: "/services/asbestos-abatement", label: "Asbestos" },
  { href: "/services/mold-abatement", label: "Mold" },
  { href: "/services/lead-abatement", label: "Lead" },
  { href: "/services/bin-rentals", label: "Bin Rentals" },
  { href: siteRoutes.contact, label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(11,15,18,0.92)] backdrop-blur">
      <div className="hidden bg-[var(--color-surface)] lg:block">
        <Container className="flex items-center justify-between py-2 text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
          <CallLink
            phone={siteConfig.phone}
            className="hover:text-white"
            location="header-topbar"
          >
            Call {siteConfig.phone}
          </CallLink>
          <PrimaryButton
            label="Request Site Visit"
            href="/contact"
            className="text-[0.65rem]"
          />
        </Container>
      </div>
      <Container className="flex items-center justify-between py-4">
          <Link
          href={siteRoutes.home}
          className="text-lg font-semibold uppercase tracking-[0.3em]"
        >
          GT Abatement
        </Link>
        <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.2em] text-[var(--color-muted)] lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[var(--color-ink)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          className="rounded-full border border-[var(--color-border)] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--color-muted)] lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </Container>
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"}`}
      >
        <Container className="pb-6 pt-2">
          <div className="flex flex-col gap-4 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-[var(--color-ink)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-full bg-[var(--color-accent)] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent-ink)]"
              onClick={() => setOpen(false)}
            >
              Request Site Visit
            </Link>
            <CallLink
              phone={siteConfig.phone}
              className="text-center text-xs text-[var(--color-muted)]"
              location="header-mobile"
            >
              Call {siteConfig.phone}
            </CallLink>
          </div>
        </Container>
      </div>
    </header>
  );
}
