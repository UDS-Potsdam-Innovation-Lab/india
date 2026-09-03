import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Research centres",
  description: "German UDS research centres in AI, cybersecurity, extended reality, digital transformations, educational technologies, and financial technology and law.",
};

const centres = [
  {
    title: "Artificial Intelligence",
    body: "Machine learning, big data and adaptive systems — from language to autonomous applications.",
  },
  {
    title: "Cybersecurity",
    body: "Security awareness, economics of security, and advanced security analytics using machine learning.",
  },
  {
    title: "Extended Reality",
    body: "VR/AR research for education, healthcare, entertainment and industrial training.",
  },
  {
    title: "Digital Transformations",
    body: "How technological innovation drives organisational change and societal transformation.",
  },
  {
    title: "Educational Technologies",
    body: "Learning analytics: collecting and evaluating learner data to improve digital education.",
  },
  {
    title: "Financial Technology and Law",
    body: "Market microstructure, AI, digital assets and alternative finance.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        kicker="Research"
        title="Research centres at German UDS"
        body="Teaching is research-led. Professors associate with centres for scientific exchange; doctoral training is organised in centre PhD schools."
      />
      <section className="site-container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {centres.map((c) => (
            <article key={c.title} className="card-hover">
              <h2 className="font-blinker text-xl font-semibold text-navy">{c.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{c.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
