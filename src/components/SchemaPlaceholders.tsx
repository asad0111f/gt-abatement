import { siteConfig } from "@/lib/siteConfig";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/EnvironmentalOrganization",
    name: siteConfig.name,
    url: siteConfig.website,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    category: "Environmental / Hazardous Material Services",
    serviceType: [
      "Hazardous material abatement",
      "Asbestos abatement",
      "Mold remediation",
      "Lead abatement",
      "Designated substance testing",
      "Designated substance surveys",
      "Asbestos management programs",
      "Bin rentals",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    areaServed: "Greater Toronto Area (GTA), Ontario",
    // TODO: Add geo coordinates and social links when available.
    // TODO: Add Google Business Profile URL when available.
    // TODO: Add review aggregation once verified ratings are available.
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    areaServed: "Greater Toronto Area (GTA), Ontario",
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
    },
    // TODO: Add Google Business Profile URL when available.
    // TODO: Add review aggregation once verified ratings are available.
    // TODO: Add service-specific offers details.
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
