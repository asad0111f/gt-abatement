export function TestimonialCard({
  quote,
  author,
  source,
}: {
  quote: string;
  author: string;
  source?: string;
}) {
  if (!quote || !author) return null;
  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <p className="text-base text-[var(--color-ink)]">"{quote}"</p>
      <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
        {author}
        {source ? ` • ${source}` : ""}
      </p>
    </div>
  );
}
