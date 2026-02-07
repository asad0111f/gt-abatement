import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-[var(--color-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
