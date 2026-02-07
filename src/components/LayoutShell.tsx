"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallButton } from "@/components/MobileCallButton";
import { CallLink } from "@/components/CallLink";
import { siteConfig } from "@/lib/siteConfig";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLanding = pathname?.startsWith("/lp/");

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)]">
      {isLanding ? (
        <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-[0.3em]"
            >
              GT Abatement
            </Link>
            <CallLink
              phone={siteConfig.phone}
              className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]"
              location="lp-header"
            >
              Call {siteConfig.phone}
            </CallLink>
          </div>
        </header>
      ) : (
        <Header />
      )}
      <main className="pt-0">{children}</main>
      {!isLanding && <Footer />}
      <MobileCallButton phone={siteConfig.phone} />
    </div>
  );
}
