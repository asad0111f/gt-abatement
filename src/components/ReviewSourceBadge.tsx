import Image from "next/image";

export function ReviewSourceBadge({
  label,
  imageSrc,
  imageAlt,
}: {
  label: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  if (!imageSrc || !imageAlt) return null;
  return (
    <div className="rounded-3xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
        {label}
      </p>
      <div className="relative mt-4 h-16 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain object-left"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
