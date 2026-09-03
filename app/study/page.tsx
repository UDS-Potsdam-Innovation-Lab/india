import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { StudyExplorer } from "@/components/StudyExplorer";
import { Cta } from "@/components/Cta";
import { CATALOGUE_IMAGES } from "@/lib/media";

export const metadata: Metadata = {
  title: "Study at German UDS from India",
  description:
    "Internationally accredited Master's, MBA and Micro-Degree programmes. Fully online, English, studied from home in India.",
};

const boxes = [
  { href: "/study/masters", t: "Master's", d: "2 years · 120 ECTS", image: CATALOGUE_IMAGES.master },
  { href: "/fast-track", t: "Fast Track", d: "1 year · 60 ECTS", image: CATALOGUE_IMAGES.fastTrack },
  { href: "/study/mba", t: "MBA", d: "1 year · 60 ECTS", image: CATALOGUE_IMAGES.mba },
  { href: "/study/micro-degrees", t: "Micro-Degrees", d: "3 months · 5 ECTS", image: CATALOGUE_IMAGES.micro },
];

export default function StudyPage() {
  return (
    <>
      <PageHero kicker="Study" title="Accredited programmes, fully online." />
      <section className="site-container pb-16">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {boxes.map((x) => (
            <Link
              key={x.href}
              href={x.href}
              className="group overflow-hidden rounded-[15px] bg-mist transition duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={x.image}
                  alt={x.t}
                  fill
                  sizes="(min-width: 1280px) 22vw, 50vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h2 className="font-blinker text-2xl font-semibold text-navy">{x.t}</h2>
                <p className="mt-1 text-sm text-navy/70">{x.d}</p>
              </div>
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
