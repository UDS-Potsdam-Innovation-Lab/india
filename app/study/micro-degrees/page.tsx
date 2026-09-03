import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { MicroFilter } from "@/components/MicroFilter";
import { Cta } from "@/components/Cta";
import { CATALOGUE_IMAGES } from "@/lib/media";

export const metadata: Metadata = {
  title: "Micro-Degree programmes",
  description: "3-month, 5 ECTS online Micro-Degrees at €900. No prior qualifications. Start any quarter from India.",
};

export default function MicroPage() {
  return (
    <>
      <PageHero
        kicker="Micro-Degrees"
        title="3 months · 5 ECTS · €900"
        body="Same modules as the degree programmes. No application process."
        image={CATALOGUE_IMAGES.micro}
      />
      <section className="site-container pb-16">
        <MicroFilter />
      </section>
      <Cta primary={{ href: "/fast-track", label: "See Fast Track" }} />
    </>
  );
}
