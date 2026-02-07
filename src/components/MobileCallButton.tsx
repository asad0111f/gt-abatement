import { CallLink } from "@/components/CallLink";

export function MobileCallButton({ phone }: { phone: string }) {
  return (
    <CallLink
      phone={phone}
      location="mobile-floating"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-[var(--color-accent)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent-ink)] shadow-[var(--shadow-soft)] lg:hidden"
    >
      Call Now
    </CallLink>
  );
}
