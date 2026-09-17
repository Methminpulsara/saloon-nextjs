import { salonConfig } from "@/data/salon";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: salonConfig.brand.name,
    description: salonConfig.brand.description,
    telephone: salonConfig.contact.phone,
    email: salonConfig.contact.email,
    url: salonConfig.seo.canonicalUrl,
    image: salonConfig.seo.ogImage,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        salonConfig.location.street +
        (salonConfig.location.suite ? `, ${salonConfig.location.suite}` : ""),
      addressLocality: salonConfig.location.city,
      addressRegion: salonConfig.location.state,
      postalCode: salonConfig.location.postalCode,
      addressCountry: salonConfig.location.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$$",
    // NOTE: In strict accordance with schema rules, aggregateRating and reviews are omitted for demo templates.
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
