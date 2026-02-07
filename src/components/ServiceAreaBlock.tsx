import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/siteConfig";

export function ServiceAreaBlock() {
  return (
    <div className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <SectionHeading
        eyebrow="Service Area"
        title="GTA-focused hazardous material services."
        description="Serving properties across the Greater Toronto Area and surrounding Ontario regions. Service is provided on-site where compliant work is required."
      />
      <p className="mt-4 text-sm text-[var(--color-muted)]">
        Primary coverage: {siteConfig.areaOfOperation}.
      </p>
    </div>
  );
}
