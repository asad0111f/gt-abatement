export type AnalyticsPayload = Record<string, string | number | boolean>;

export function trackEvent(name: string, payload?: AnalyticsPayload) {
  if (typeof window === "undefined") return;
  try {
    const dataLayer = (window as { dataLayer?: Array<unknown> }).dataLayer;
    if (Array.isArray(dataLayer)) {
      dataLayer.push({ event: name, ...payload });
    }
  } catch {
    // No-op if analytics is not configured.
  }
}
