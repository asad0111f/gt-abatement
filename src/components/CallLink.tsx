"use client";

import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function CallLink({
  phone,
  children,
  className,
  location,
}: {
  phone: string;
  children: React.ReactNode;
  className?: string;
  location?: string;
}) {
  return (
    <a
      href={`tel:${phone}`}
      className={cn(className)}
      onClick={() =>
        trackEvent(
          "lead_call_click",
          location ? { location } : undefined
        )
      }
      data-track="phone-click"
    >
      {children}
    </a>
  );
}
