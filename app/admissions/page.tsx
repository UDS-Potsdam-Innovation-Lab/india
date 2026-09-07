import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Cta } from "@/components/Cta";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admissions and fees",
  description:
    "Admission requirements, application steps, tuition of €7,500 per year and €900 Micro-Degrees, and payment plans for German UDS.",
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        kicker="Admissions"
        title="How to apply"
        body="Direct application to German UDS. No uni-assist. Fully online programmes do not require a student visa, blocked account or APS for enrolment."
      />
      <section className="site-container py-14 space-y-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Master's", "Bachelor's degree (STEM for some programmes). English B2. €7,500 p.a. Two years, 120 ECTS."],
            ["Fast Track", "STEM bachelor's with 240 ECTS or equivalent. English B2. €7,500. One year, 60 ECTS."],
            ["MBA", "University degree or equivalent. At least three years' relevant professional experience in a digital environment. English B2. €7,500."],
            ["Micro-Degree", "No prior qualifications. Book directly. €900. 5 ECTS, 3 months."],
          ].map(([t, b]) => (
            <article key={t} className="card-hover">
              <h2 className="font-blinker text-2xl font-semibold text-navy">{t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{b}</p>
            </article>
          ))}
        </div>
        <div>
          <h2 className="section-title">Application steps (Master&apos;s, Fast Track and MBA)</h2>
          <ol className="mt-6 space-y-4">
            {[
              "Create an account on the German UDS portal and verify your email.",
              "Start the application from the link you receive after registration.",
              "Upload degree documents, English evidence and (for MBA) experience proof.",
              "Student Affairs can review your file in a drop-in or personal session.",
            ].map((s, i) => (
              <li key={s} className="flex gap-3">
                <span className="font-blinker text-2xl font-semibold text-orange">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-gray-700">{s}</span>
              </li>
            ))}
          </ol>
          <a href={SITE.applyUrl} className="btn-cta mt-8" target="_blank" rel="noreferrer">
            Official portal
          </a>
        </div>
        <div>
          <h2 className="section-title">Tuition payment</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
            <li>Yearly: €7,500 before the programme year starts (Master&apos;s: each of two years).</li>
            <li>Quarterly instalments: €8,000 per year, €2,000 due by the 15th of the month before each quarter (January, April, July, October).</li>
            <li>Master&apos;s students may extend studies free of charge up to 6 years after paying; MBA students up to 3 years.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-500">
            Deadline currently published for the next intake: {SITE.deadlines.degree}. Always confirm on german-uds.de.
          </p>
        </div>
        <div>
          <h2 className="section-title">Technical requirements</h2>
          <p className="mt-3 text-gray-700">
            Reliable high-speed internet. Computer (Windows or Mac) with webcam and microphone.
          </p>
          <Link href="/apply" className="btn-secondary mt-6">
            Ask admissions →
          </Link>
        </div>
      </section>
      <Cta />
    </>
  );
}
