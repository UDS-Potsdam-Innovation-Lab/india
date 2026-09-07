import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { SITE } from "@/lib/site";
import { masters } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Fast Track",
  description:
    "German UDS Fast Track: a one-year, 60 ECTS online Master's route for STEM bachelor's holders with 240 ECTS. English. €7,500. Full-time or part-time. Deadline 20 September 2026.",
};

const faq = [
  {
    q: "Who is Fast Track for?",
    a: "Applicants who already hold a Bachelor's degree in a STEM discipline with 240 ECTS or equivalent, plus English at CEFR B2. If your bachelor's is 180 ECTS, the standard two-year Master's (120 ECTS) is the usual route.",
  },
  {
    q: "Is Fast Track a separate degree?",
    a: "Fast Track is the one-year, 60 ECTS route into a German UDS Master's. You study online in English and graduate with a German university Master's — not a certificate short course.",
  },
  {
    q: "Can I study without relocating?",
    a: "Yes. Fast Track is fully online. Full-time and part-time modes are available. You do not need to relocate to Germany for this programme.",
  },
];

export default function FastTrackPage() {
  const { fastTrack } = SITE;

  return (
    <>
      <PageHero
        kicker="Fast Track"
        title="A one-year German Master's for STEM graduates."
        body="Fast Track propels the opportunity to complete a German-accredited Master's in 12 months — fully online — if you already hold a STEM bachelor's with 240 ECTS or equivalent."
      />
      <section className="site-container py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="section-title">The opportunity</h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                In the European credit system, a Master&apos;s typically brings the total to 300 ECTS.
                If you already hold 240 ECTS from a STEM bachelor&apos;s, Fast Track lets you complete the
                remaining 60 ECTS in one year (four quarters) instead of a two-year, 120 ECTS Master&apos;s.
              </p>
              <p className="mt-4 leading-relaxed text-gray-700">
                Study in English, full-time or part-time, with German UDS faculty. Tuition is €7,500.
                Stay where you are, keep working if you choose the part-time mode, and graduate eligible
                to apply for roles that require a recognised German university Master&apos;s.
              </p>
            </div>
            <div>
              <h2 className="section-title">Programmes with Fast Track</h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                Fast Track is offered on selected Master&apos;s programmes. If you hold a STEM bachelor&apos;s
                with 240 ECTS, you can finish one of these degrees in one year instead of two.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
                {masters
                  .filter((p) => p.fastTrack)
                  .map((p) => (
                    <li key={p.slug}>
                      <Link href={`/study/masters/${p.slug}`} className="font-semibold text-navy hover:text-[#f18800]">
                        {p.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h2 className="section-title">Entry requirements</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
                {fastTrack.requirements.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
          <aside>
            <div className="soft-panel">
              <h2 className="font-blinker text-xl font-semibold text-navy">Fast Track details</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-gray-500">Duration</dt>
                  <dd className="text-navy">{fastTrack.duration}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Language</dt>
                  <dd className="text-navy">{fastTrack.language}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Fees</dt>
                  <dd className="text-navy">{fastTrack.fees}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Study mode</dt>
                  <dd className="text-navy">{fastTrack.mode}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Application deadline</dt>
                  <dd className="text-navy">{fastTrack.deadline}</dd>
                </div>
              </dl>
              <Link href="/apply?program=Fast%20Track" className="btn-cta mt-6 w-full">
                Apply
              </Link>
              <Link href="/study/masters" className="btn-secondary mt-4">
                Two-year Master&apos;s programmes →
              </Link>
            </div>
          </aside>
        </div>
        <div className="mt-14">
          <Faq items={faq} />
        </div>
      </section>
      <Cta
        title="Ready for Fast Track?"
        body="Hold a STEM bachelor's with 240 ECTS? Apply for the next intake, or talk to Student Affairs if you are unsure whether your credits qualify."
        primary={{ href: "/apply?program=Fast%20Track", label: "Apply now" }}
        secondary={{ href: "/student-affairs", label: "Talk to Student Affairs" }}
      />
    </>
  );
}
