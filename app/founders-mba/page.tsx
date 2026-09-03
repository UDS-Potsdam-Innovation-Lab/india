import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Cta } from "@/components/Cta";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Founder's MBAs",
  description:
    "Dual-MBA pathway with Berlin College of Business and Technology: International MBA plus German UDS MBA in Digital Transformation, inside Berlin's startup ecosystem. Applications expected later in 2026.",
};

export default function FoundersMbaPage() {
  return (
    <>
      <PageHero
        kicker="The Founder's MBAs"
        title="Two accredited MBAs. One founder-focused pathway. An option to come to Germany."
        body="German UDS and Berlin College of Business and Technology (BCBT) launched The Founder's MBAs: a dual-degree route that pairs business leadership training with digital expertise — and places students inside Berlin's startup ecosystem."
      />
      <section className="site-container py-14">
        <div className="border-l-4 border-[#fd9800] bg-orange-50/70 px-5 py-4 text-sm text-navy">
          Status (as published July 2026): a Memorandum of Understanding has been signed. Applications
          are expected to open later in 2026. Programme structure, admissions criteria, curriculum details
          and tuition fees will be published on german-uds.de. This page does not open applications yet.
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="section-title">What you would earn</h2>
            <p className="mt-4 text-gray-700">
              Over two years, students complete BCBT&apos;s International MBA (awarded by Università degli
              Studi Guglielmo Marconi, Italy) alongside German UDS&apos;s MBA in Digital Transformation. The
              first degree covers entrepreneurship, negotiation and scaling. The second covers digital
              strategy, cloud infrastructure and venture building. Graduates hold two independently
              accredited degrees.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>Work alongside 260+ active ventures rather than only reading about entrepreneurship.</li>
              <li>Curriculum built on Harvard Business Impact case studies.</li>
              <li>Faculty including researchers who led work at institutions such as the Hasso Plattner Institute.</li>
              <li>Weekly networking, founder meetups, bootcamps and hackathons.</li>
              <li>In-house startup programme with legal and financial advisory while you study.</li>
            </ul>
          </div>
          <aside className="soft-panel">
            <p className="section-kicker">India angle</p>
            <h2 className="mt-2 font-blinker text-2xl font-semibold text-navy">Stay online first, Berlin later</h2>
            <p className="mt-3 text-gray-600">
              Most German UDS programmes are completed fully online from India. The Founder&apos;s MBAs are
              the on-the-ground Germany option: if you later want to live and build in Berlin, this is
              the pathway the university has announced with BCBT.
            </p>
            <p className="mt-4 text-gray-600">
              A typical sequence for Indian applicants: complete a German UDS online MBA or Master&apos;s
              from home first (no visa required for that degree), then apply to The Founder&apos;s MBAs when
              admissions open — or enquire now so Student Affairs can flag you when the portal opens.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Link href="/apply?program=Founder's%20MBAs" className="btn-cta">
                Register interest
              </Link>
              <a
                href={`${SITE.mainSite}/study/mba-digital-transformation`}
                className="btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                MBA Digital Transformation (online) →
              </a>
            </div>
          </aside>
        </div>
        <blockquote className="mt-12 border-l-4 border-orange pl-5 text-gray-700">
          “Digital transformation is decided by people, not by technology alone. Combining that with
          BCBT&apos;s entrepreneurs and its on-campus startup community means students graduate having
          already worked next to real ventures.”
          <footer className="mt-2 text-sm text-gray-500">
            Prof. Dr. Christoph Meinel, President of German UDS
          </footer>
        </blockquote>
        <div className="mt-10">
          <h2 className="section-title">Who it is for</h2>
          <p className="mt-4 max-w-3xl text-gray-700">
            Founders, operators and intrapreneurs who want both a business MBA and a digital MBA, and
            who can spend the programme period in the Berlin-Brandenburg region. Relocation, visa and
            living costs would then apply — unlike the fully online German UDS degrees.
          </p>
        </div>
      </section>
      <Cta
        title="Want Berlin later? Start online now."
        body="The online MBA Digital Transformation is open. Founder's MBA applications will follow later in 2026."
        primary={{ href: "/study/mba/digital-transformation", label: "Online MBA Digital Transformation" }}
        secondary={{ href: "/apply?program=Founder's%20MBAs", label: "Register interest" }}
      />
    </>
  );
}
