"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { PrimaryButton } from "@/components/PrimaryButton";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const statusId = "contact-form-status";
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setSubmitted(false);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        setError(data.error || "Unable to submit. Please try again.");
      } else {
        setSubmitted(true);
        (event.currentTarget as HTMLFormElement).reset();
        trackEvent("lead_form_submit", { location: "form" });
        router.push("/thank-you?type=form");
      }
    } catch {
      setError("Unable to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      className="grid gap-4"
      action="#"
      data-track="lead-form"
      aria-describedby={statusId}
      onSubmit={handleSubmit}
    >
      <div className="hidden">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} />
      </div>
      <div className="grid gap-2">
        <label
          htmlFor="contact-name"
          className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]"
        >
          Name
        </label>
        <input
          id="contact-name"
          className="h-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-sm text-[var(--color-ink)]"
          name="name"
          required
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label
            htmlFor="contact-email"
            className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]"
          >
            Email
          </label>
          <input
            id="contact-email"
            className="h-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-sm text-[var(--color-ink)]"
            name="email"
            type="email"
            required
          />
        </div>
        <div className="grid gap-2">
          <label
            htmlFor="contact-phone"
            className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]"
          >
            Phone
          </label>
          <input
            id="contact-phone"
            className="h-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-sm text-[var(--color-ink)]"
            name="phone"
            type="tel"
            required
          />
        </div>
      </div>
      <div className="grid gap-2">
        <label
          htmlFor="contact-subject"
          className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]"
        >
          Subject
        </label>
        <select
          id="contact-subject"
          className="h-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-sm text-[var(--color-ink)]"
          name="subject"
          required
        >
          <option value="">Select a subject</option>
          <option>Asbestos</option>
          <option>Mold</option>
          <option>Lead</option>
          <option>Bin Rental</option>
          <option>Testing</option>
          <option>Other</option>
        </select>
      </div>
      <div className="grid gap-2">
        <label
          htmlFor="contact-message"
          className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          className="min-h-[160px] rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-ink)]"
          name="message"
          required
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <PrimaryButton
          label={submitting ? "Submitting..." : "Request Site Visit"}
          type="submit"
          dataTrack="form-submit"
          className={submitting ? "opacity-70" : ""}
        />
      </div>
      {error ? (
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elev)] p-4 text-sm text-[var(--color-muted)]">
          {error}
        </div>
      ) : null}
      <div
        id={statusId}
        role="status"
        aria-live="polite"
        className="min-h-[24px] text-sm text-[var(--color-muted)]"
      >
        {submitted ? "Thank you. A service expert will follow up shortly." : ""}
      </div>
    </form>
  );
}
