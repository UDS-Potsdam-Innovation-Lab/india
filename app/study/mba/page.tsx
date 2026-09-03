import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProgramCard } from "@/components/ProgramCard";
import { Cta } from "@/components/Cta";
import { mbas } from "@/lib/programs";

export const metadata: Metadata = {
  title: "MBA programmes",
  description: "One-year online MBAs in Digital Transformation, Digital Technologies, Digital Management, Digital Media, FinTech, Digital Law and public-sector transformation. €7,500.",
};

export default function MbaIndexPage() {
  return (
    <>
      <PageHero kicker="MBA" title="Our MBA programmes" body="Online · 1 year · 60 ECTS · €7,500" />
      <section className="site-container pb-16">
        <div className="grid gap-5 md:grid-cols-2">
          {mbas.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
