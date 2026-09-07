import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProgramCard } from "@/components/ProgramCard";
import { Cta } from "@/components/Cta";
import { masters } from "@/lib/programs";
import { canonicalToMain, MAIN_PATHS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Master's programmes",
  description: "Online M.Sc. programmes in Applied AI, Cybersecurity, Advanced Digital Reality, Digital Leadership and Quantum Computing. 2 years, 120 ECTS, €7,500 per year.",
  ...canonicalToMain(MAIN_PATHS.masters),
};

export default function MastersPage() {
  return (
    <>
      <PageHero kicker="Master's" title="Our Master's programmes" body="Online · 2 years · 120 ECTS · €7,500 p.a." image={null} />
      <section className="site-container pb-16">
        <div className="grid gap-5 md:grid-cols-2">
          {masters.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
