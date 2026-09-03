import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { mbas, masters } from "@/lib/programs";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "",
    "/about",
    "/study",
    "/study/masters",
    "/study/mba",
    "/study/micro-degrees",
    "/fast-track",
    "/founders-mba",
    "/why-india",
    "/student-affairs",
    "/admissions",
    "/research",
    "/contact",
    "/apply",
    "/imprint",
    "/privacy",
    "/cookies",
    "/accessibility",
  ];

  const programPaths = [
    ...masters.map((p) => `/study/masters/${p.slug}`),
    ...mbas.map((p) => `/study/mba/${p.slug}`),
  ];

  return [...staticPaths, ...programPaths].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: path.includes("/study/") ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
