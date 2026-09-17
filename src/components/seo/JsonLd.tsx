import { businessData } from "@/data/business";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: businessData.name,
    description: businessData.description,
    telephone: businessData.phone,
    email: businessData.email,
    url: "https://lumieresalon.demo",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1200&auto=format&fit=crop",
    address: {
      "@type": "PostalAddress",
      streetAddress: businessData.address.street + (businessData.address.suite ? `, ${businessData.address.suite}` : ""),
      addressLocality: businessData.address.city,
      addressRegion: businessData.address.state,
      postalCode: businessData.address.postalCode,
      addressCountry: businessData.address.country,
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
