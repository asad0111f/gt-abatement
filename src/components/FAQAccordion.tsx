export function FAQAccordion({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
        >
          <summary className="cursor-pointer list-none text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)]">
            {item.question}
          </summary>
          <p className="mt-3 text-sm text-[var(--color-muted)]">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
