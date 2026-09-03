import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgramDetail } from "@/components/ProgramDetail";
import { JsonLd } from "@/components/JsonLd";
import { getProgram, mbas } from "@/lib/programs";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return mbas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram("mba", slug);
  if (!program) return {};
  return {
    title: program.title,
    description: `${program.title} — ${program.duration}. Fully online German-accredited MBA for professionals in India.`,
    alternates: { canonical: `${SITE.url}/study/mba/${program.slug}` },
  };
}

export default async function MbaProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgram("mba", slug);
  if (!program) notFound();
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: program.title,
          description: program.overview,
          provider: { "@type": "CollegeOrUniversity", name: SITE.name, url: SITE.mainSite },
          educationalCredentialAwarded: "MBA",
          inLanguage: "en",
          timeRequired: "P1Y",
          offers: { "@type": "Offer", price: "7500", priceCurrency: "EUR" },
        }}
      />
      <ProgramDetail program={program} />
    </>
  );
}
