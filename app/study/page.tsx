import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { StudyExplorer } from "@/components/StudyExplorer";
import { Cta } from "@/components/Cta";
import { canonicalToMain, MAIN_PATHS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Study at German UDS",
  description:
    "Internationally accredited Master's, MBA and Micro-Degree programmes. Fully online, in English, studied from home.",
  ...canonicalToMain(MAIN_PATHS.study),
};

const boxes = [
  { href: "/study/masters", t: "Master's", d: "2 years · 120 ECTS" },
  { href: "/study/mba", t: "MBA", d: "1 year · 60 ECTS" },
  { href: "/study/micro-degrees", t: "Micro-Degrees", d: "3 months · 5 ECTS" },
];

export default function StudyPage() {
  return (
    <>
      <PageHero kicker="Study" title="Accredited programmes, fully online." image={null} />
      <section className="site-container pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          {boxes.map((x) => (
            <Link
              key={x.href}
              href={x.href}
              className="group flex h-full flex-col overflow-hidden rounded-[15px] bg-mist p-7 transition duration-300 hover:shadow-lg"
            >
              <h2 className="font-blinker text-2xl font-semibold text-navy">{x.t}</h2>
              <p className="mt-1 text-sm text-navy/70">{x.d}</p>
            </Link>
          ))}
        </div>
        <div className="mt-14">
          <h2 className="section-title">Explore programmes</h2>
          <div className="mt-8">
            <StudyExplorer />
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
