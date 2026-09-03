import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgramDetail } from "@/components/ProgramDetail";
import { JsonLd } from "@/components/JsonLd";
import { getProgram, masters } from "@/lib/programs";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return masters.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram("master", slug);
  if (!program) return {};
  return {
    title: program.title,
    description: `${program.title} — ${program.duration}. Fully online German-accredited Master's for students in India. ${program.tagline}`,
    alternates: { canonical: `${SITE.url}/study/masters/${program.slug}` },
  };
}

export default async function MasterProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgram("master", slug);
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
          educationalCredentialAwarded: "Master of Science",
          inLanguage: "en",
          timeRequired: "P2Y",
          offers: { "@type": "Offer", price: "7500", priceCurrency: "EUR", category: "TuitionPerYear" },
        }}
      />
      <ProgramDetail program={program} />
    </>
  );
}
