import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Allow crawlers so they can follow links to german-uds.de.
 * Do not advertise a sitemap — this site must not compete for indexation.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    host: SITE.mainSite.replace(/^https:\/\//, ""),
  };
}
