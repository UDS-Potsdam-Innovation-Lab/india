import { SITE } from "@/lib/site";

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: SITE.name,
    alternateName: [SITE.shortName, SITE.indiaName],
    url: SITE.mainSite,
    sameAs: [SITE.url, SITE.social.linkedin],
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Marlene-Dietrich-Allee 14",
      addressLocality: "Potsdam",
      postalCode: "14482",
      addressCountry: "DE",
    },
    areaServed: "IN",
  };
}
