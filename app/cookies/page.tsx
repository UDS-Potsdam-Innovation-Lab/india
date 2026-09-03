import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Cookie notice" };

export default function CookiesPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Cookie notice" />
      <article className="site-container max-w-3xl space-y-6 py-12 text-gray-700">
        <p>
          Essential cookies remember your consent choice and keep the site secure. They do not require
          consent under § 25 TTDSG when strictly necessary.
        </p>
        <p>
          If you choose “Accept all”, we may later enable privacy-respecting analytics. Until that is
          configured, this India site does not load third-party advertising cookies.
        </p>
        <p>
          You can clear the stored choice by deleting site data for this domain in your browser, then
          reload to see the banner again.
        </p>
      </article>
    </>
  );
}
