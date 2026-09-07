import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { MicroFilter } from "@/components/MicroFilter";
import { Cta } from "@/components/Cta";
import { canonicalToMain, MAIN_PATHS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Micro-Degree programmes",
  description: "3-month, 5 ECTS online Micro-Degrees at €900. Open a programme on german-uds.de to enrol.",
  ...canonicalToMain(MAIN_PATHS.micro),
};

export default function MicroPage() {
  return (
    <>
      <PageHero
        kicker="Micro-Degrees"
        title="3 months · 5 ECTS · €900"
        body="Same modules as the degree programmes. Choose a name below to open it on german-uds.de — enrolment is there, with no application process."
        image={null}
      />
      <section className="site-container pb-16">
        <MicroFilter />
      </section>
      <Cta primary={{ href: "/fast-track", label: "See Fast Track" }} />
    </>
  );
}
