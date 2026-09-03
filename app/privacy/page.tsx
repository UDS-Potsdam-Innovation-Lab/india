import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Privacy policy" body="GDPR, BDSG and India's Digital Personal Data Protection Act, 2023." />
      <article className="site-container max-w-3xl space-y-6 py-12 text-gray-700">
        <p>
          Controller: {SITE.address.line1}, {SITE.address.line2}, {SITE.address.city}. Email: {SITE.email}.
        </p>
        <h2 className="font-blinker text-2xl font-semibold text-navy">Data we process</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Enquiry data you send (name, email, phone, city, programme interest, message).</li>
          <li>Technical data required to deliver the site (IP address, browser, pages requested) via hosting logs.</li>
          <li>Cookie preference stored locally in your browser.</li>
        </ul>
        <h2 className="font-blinker text-2xl font-semibold text-navy">Purposes and legal bases</h2>
        <p>
          We answer admissions enquiries (Art. 6 (1)(b) GDPR / contractual steps; legitimate interest in
          informing prospective students). Essential cookies: Art. 6 (1)(f) GDPR and § 25 TTDSG. Optional
          analytics only with consent (Art. 6 (1)(a) GDPR). For Indian residents we process personal data
          for the specified purpose of counselling and application support under the DPDP Act, with your
          consent where required.
        </p>
        <h2 className="font-blinker text-2xl font-semibold text-navy">Transfers</h2>
        <p>
          Applications are processed by German UDS systems in Germany. Hosting providers may process
          technical data in the EU. We do not sell personal data.
        </p>
        <h2 className="font-blinker text-2xl font-semibold text-navy">Your rights</h2>
        <p>
          Access, rectification, erasure, restriction, objection, portability, and withdrawal of consent.
          Lodge a complaint with a supervisory authority (for example the Brandenburg DPA) or, in India,
          with the Data Protection Board of India once operational. Contact {SITE.email}.
        </p>
        <p className="text-sm text-gray-500">This notice summarises processing for the India website. Programme applications follow the privacy information shown in the official portal.</p>
      </article>
    </>
  );
}
