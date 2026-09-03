import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "About German UDS",
  description:
    "German University of Digital Science is a state-recognised, fully digital university in Potsdam. Founded by Prof. Dr. Mike Friedrichsen and Prof. Dr. Christoph Meinel.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="The German University of Digital Science"
        body="University as a Service. A fully digital, English-language university based at CloudHouse in Media City Babelsberg, Potsdam — built so students worldwide, including in India, can earn a German university degree without compulsory attendance."
      />
      <section className="site-container py-14 space-y-10">
        <p className="max-w-3xl text-lg text-gray-700">
          German UDS was founded by computer science professors Mike Friedrichsen and Christoph Meinel.
          The Land Brandenburg recognised the university in February 2025. Teaching began on 1 April 2025.
          The German Accreditation Council has accredited the study programmes. The Wissenschaftsrat
          reviewed the concept positively.
        </p>
        <div className="grid gap-10 md:grid-cols-2">
          <article className="card-hover">
            <h2 className="font-blinker text-2xl font-semibold text-navy">What we teach</h2>
            <p className="mt-3 text-gray-600">
              Digital science, artificial intelligence, cybersecurity, virtual and augmented reality,
              and digital transformation — plus law, ethics, teamwork and design thinking alongside the
              technical core.
            </p>
          </article>
          <article className="card-hover">
            <h2 className="font-blinker text-2xl font-semibold text-navy">Who it is for</h2>
            <p className="mt-3 text-gray-600">
              Learners who want to shape digital transformation but cannot study in person for financial,
              professional or family reasons. Tuition is set on a non-profit basis at €7,500 per year.
            </p>
          </article>
        </div>
        <div>
          <h2 className="section-title">This India website</h2>
          <p className="mt-4 max-w-3xl text-gray-700">
            It is a market site for Indian applicants. It uses the German UDS corporate identity and the
            same programme facts as german-uds.de. Enrolment, examination and degree award remain with
            German University of Digital Science gGmbH in Potsdam. Applications are submitted through the
            official university portal.
          </p>
        </div>
      </section>
      <Cta />
    </>
  );
}
