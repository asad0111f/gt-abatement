"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

type ButtonProps = {
  label: string;
  href?: string;
  className?: string;
  variant?: "primary" | "ghost";
  type?: "button" | "submit" | "reset";
  dataTrack?: string;
};

export function PrimaryButton({
  label,
  href,
  className,
  variant = "primary",
  type = "button",
  dataTrack,
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[var(--color-accent)] text-[var(--color-accent-ink)] hover:bg-[var(--color-accent-strong)]"
      : "border border-[var(--color-border)] text-[var(--color-ink)] hover:border-[var(--color-accent)]";

  if (href) {
    if (href.startsWith("tel:")) {
      return (
        <a
          href={href}
          data-track={dataTrack}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition duration-200",
            styles,
            className
          )}
          onClick={() => trackEvent("lead_call_click", { location: "button" })}
        >
          {label}
        </a>
      );
    }
    return (
      <Link
        href={href}
        data-track={dataTrack}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition duration-200",
          styles,
          className
        )}
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      type={type}
      data-track={dataTrack}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition duration-200",
        styles,
        className
      )}
    >
      {label}
    </button>
  );
}
