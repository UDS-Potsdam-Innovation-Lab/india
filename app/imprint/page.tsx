import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Imprint",
  robots: { index: false, follow: true },
};

export default function ImprintPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Imprint" />
      <section className="site-container prose max-w-3xl py-12 text-gray-700">
        <p>
          {SITE.address.line1}
          <br />
          {SITE.address.line2}
          <br />
          {SITE.address.city}
        </p>
        <p>Represented by {SITE.legal.representedBy}</p>
        <p>
          Commercial register: {SITE.legal.court}, {SITE.legal.register}
        </p>
        <p>
          Responsible for content pursuant to § 55 Abs. 2 RStV: German University of Digital Science gGmbH,
          Prof. Dr. Mike Friedrichsen, Prof. Dr. Christoph Meinel, Marlene-Dietrich-Allee 14, 14482 Potsdam,
          Germany.
        </p>
        <p>
          Phone: {SITE.phoneAlt}
          <br />
          Email: {SITE.email}
        </p>
        <h2 className="font-blinker text-2xl font-semibold text-navy">Dispute resolution</h2>
        <p>
          Alternative dispute resolution pursuant to Art. 14 (1) ODR-VO and § 36 VSBG. The European ODR
          platform:{" "}
          <a className="text-orange underline" href="https://ec.europa.eu/consumers/odr/">
            https://ec.europa.eu/consumers/odr/
          </a>
          . We are neither obliged nor willing to participate in dispute resolution before a consumer
          arbitration board. Contact {SITE.presidiumEmail} if a service did not meet expectations.
        </p>
        <p>This website is operated by German University of Digital Science gGmbH.</p>
      </section>
    </>
  );
}
