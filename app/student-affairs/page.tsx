import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Cta } from "@/components/Cta";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Student Affairs",
  description:
    "German UDS Student Affairs support for applicants and students: weekly drop-in sessions, personal appointments, application help and academic webinars from enquiry to graduation.",
};

export default function StudentAffairsPage() {
  return (
    <>
      <PageHero
        kicker="Student Affairs"
        title="Support for your academic journey — from first question to diploma."
        body="Drop-in sessions and specialised webinars. If you need help completing an application, checking Fast Track eligibility (240 ECTS STEM), or understanding how a fully online German degree works, this is the desk."
      />
      <section className="site-container py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <article className="border-t border-navy/10 pt-6">
            <p className="section-kicker">Weekly drop-in</p>
            <h2 className="mt-2 font-blinker text-3xl font-semibold text-navy">Every Wednesday</h2>
            <p className="mt-4 text-gray-600">13:00–13:30 CET · online via Zoom</p>
            <p className="mt-2 text-gray-600">
              That is 17:30–18:00 IST in winter (CET) and 16:30–17:00 IST in summer (CEST).
            </p>
            <p className="mt-4 text-sm text-gray-500">
              German University of Digital Science, Potsdam. The meeting link activates 10 minutes before start.
            </p>
            <a href={`mailto:${SITE.studentAffairsEmail}?subject=Drop-in%20session`} className="btn-cta mt-6">
              Request this week&apos;s link
            </a>
          </article>
          <article className="border-t border-navy/10 pt-6">
            <p className="section-kicker">By appointment</p>
            <h2 className="mt-2 font-blinker text-3xl font-semibold text-navy">Personal session</h2>
            <p className="mt-4 text-gray-600">
              Cannot join Wednesday? Schedule a personal session with student support. Useful for document
              checks, Fast Track eligibility (240 ECTS STEM), MBA work-experience questions, and Founder&apos;s MBA interest.
            </p>
            <Link href="/apply" className="btn-secondary mt-6">
              Request a personal session →
            </Link>
          </article>
        </div>
        <div className="mt-12">
          <h2 className="section-title">What we help with</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Application accounts and document checklists",
              "English B2 evidence",
              "Choosing Master's, Fast Track, MBA or Micro-Degree",
              "Fast Track eligibility (STEM bachelor's with 240 ECTS)",
              "Tuition payment options (yearly vs quarterly)",
              "Time zones, live sessions and COVE access",
              "How the German degree can be used when applying for jobs",
              "Interest list for The Founder's MBAs",
              "Technical requirements (computer, webcam, internet)",
            ].map((t) => (
              <p key={t} className="border-t border-navy/10 pt-4 text-sm text-navy">
                {t}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-navy/10 pt-8">
          <h2 className="font-blinker text-2xl font-semibold text-navy">Student life, digitally</h2>
          <p className="mt-3 max-w-3xl text-gray-600">
            Beyond classes, students use COVE — the Campus of Virtual Education — with virtual cafeteria,
            lounge and library spaces, plus online events and meetups. Study anytime, submit within set
            deadlines, and remain part of an international cohort.
          </p>
          <a href={SITE.coveUrl} className="btn-secondary mt-6" target="_blank" rel="noreferrer">
            Explore COVE →
          </a>
        </div>
      </section>
      <Cta title="Bring your questions. We will answer them." />
    </>
  );
}
