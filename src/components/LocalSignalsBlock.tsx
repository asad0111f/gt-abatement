import { SectionHeading } from "@/components/SectionHeading";

export function LocalSignalsBlock() {
  return (
    <div className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <SectionHeading
        eyebrow="Local Signals"
        title="On-site, regulated service across the GTA."
        description="We provide on-site assessments and regulated hazardous material services for GTA and surrounding Ontario properties."
      />
      <p className="mt-4 text-sm text-[var(--color-muted)]">
        Work is handled under GT Abatement Inc. from containment through haulage.
      </p>
    </div>
  );
}
