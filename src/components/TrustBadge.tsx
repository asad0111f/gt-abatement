import { cn } from "@/lib/utils";

export function TrustBadge({
  label,
  detail,
  className,
}: {
  label: string;
  detail?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-left",
        className
      )}
    >
      <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
        {label}
      </p>
      {detail ? (
        <p className="mt-3 text-sm text-[var(--color-muted)]">{detail}</p>
      ) : null}
    </div>
  );
}
