import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CostCalculator } from "@/components/CostCalculator";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Why study German UDS from India",
  description:
    "Stay in India, earn a German-accredited university degree online, avoid relocation costs, and remain eligible to apply for jobs after graduation — with Student Affairs support throughout.",
};

export default function WhyIndiaPage() {
  return (
    <>
      <PageHero
        kicker="India"
        title="A German university degree without leaving home."
        body="German UDS was built for people who cannot or should not relocate — for family, work or cost. For Indian applicants that is the whole point: the same state-recognised degree, minus travel, housing and visa overhead."
      />
      <section className="site-container py-14 space-y-14">
        <div className="grid gap-10 md:grid-cols-2">
          {[
            ["Stay home", "Study from Bengaluru, Hyderabad, Pune, Delhi NCR or anywhere with a reliable connection. Live with family. Keep your salary."],
            ["German-accredited", "Not a private certificate mill. A Brandenburg state-recognised university; programmes accredited by the Akkreditierungsrat and ASIIN."],
            ["Save travel and housing", "No flights every semester, no WG hunt, no blocked account for the online degree. Tuition is the main cost."],
            ["Apply for jobs afterwards", "You hold a German university Master's or MBA. Use it when applying in India, with European employers, or for roles that list a recognised postgraduate degree. We do not guarantee placement or a visa."],
            ["Student Affairs", "Application drop-ins, personal sessions and webinars. Someone answers the India-specific questions: documents, English proof, time zones, payment."],
            ["Germany remains optional", "You do not need to move to earn the degree. If you later want Berlin, The Founder's MBAs are the announced on-campus founder pathway."],
          ].map(([t, b]) => (
            <article key={t} className="card-hover">
              <h2 className="font-blinker text-2xl font-semibold text-navy">{t}</h2>
              <p className="mt-2 text-gray-600">{b}</p>
            </article>
          ))}
        </div>
        <CostCalculator />
        <div>
          <h2 className="section-title">What we will not over-claim</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
            <li>Online study from India does not by itself grant a German residence permit.</li>
            <li>APS, blocked accounts and student visas are not required for the fully online programmes; they would apply if you later relocate.</li>
            <li>Job outcomes depend on your profile, the labour market and employer decisions.</li>
            <li>Fees and deadlines follow the official german-uds.de catalogue and can change.</li>
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link href="/admissions" className="btn-cta">Admissions</Link>
            <Link href="/student-affairs" className="btn-secondary">Student Affairs →</Link>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
