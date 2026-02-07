import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ServiceCard({
  title,
  description,
  href,
  image,
  imageAlt,
  className,
}: {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col gap-6 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]",
        className
      )}
    >
      <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-[var(--color-surface-elev)]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover opacity-80 transition duration-300 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-[var(--color-muted)]">{description}</p>
      </div>
      <span className="text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
        Explore
      </span>
    </Link>
  );
}
