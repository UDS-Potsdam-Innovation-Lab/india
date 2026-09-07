import type { Metadata } from "next";
import { SITE } from "./site";

/** This site is a market landing page. Google must not rank it against german-uds.de. */
export const noindexFollow: Metadata["robots"] = {
  index: false,
  follow: true,
  nocache: true,
  googleBot: {
    index: false,
    follow: true,
    noimageindex: true,
  },
};

export const MAIN_PATHS = {
  home: SITE.mainSite,
  study: `${SITE.mainSite}/study`,
  masters: `${SITE.mainSite}/study/programs/master`,
  mba: `${SITE.mainSite}/study/programs/mba`,
  micro: SITE.microDegreeUrl,
  apply: `${SITE.mainSite}/application`,
} as const;

export function canonicalToMain(url: string): Pick<Metadata, "robots" | "alternates"> {
  return {
    robots: noindexFollow,
    alternates: { canonical: url },
  };
}
