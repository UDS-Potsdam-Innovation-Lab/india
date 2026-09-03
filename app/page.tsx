import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { HomeHero } from "@/components/HomeHero";
import { StudyExplorer } from "@/components/StudyExplorer";
import { CATALOGUE_IMAGES, UNIQUE_IMAGES } from "@/lib/media";

export const metadata: Metadata = {
  title: "German-accredited university degrees, studied from home in India",
  description:
    "German University of Digital Science offers fully online, state-recognised Master's, MBA and Micro-Degree programmes. Stay in India and graduate with a German university degree.",
};

const catalogues = [
  {
    href: "/study/masters",
    title: "Master's",
    meta: "2 years · 120 ECTS",
    image: CATALOGUE_IMAGES.master,
  },
  {
    href: "/study/mba",
    title: "MBA",
    meta: "1 year · 60 ECTS",
    image: CATALOGUE_IMAGES.mba,
  },
  {
    href: "/study/micro-degrees",
    title: "Micro-Degrees",
    meta: "3 months · 5 ECTS",
    image: CATALOGUE_IMAGES.micro,
  },
];

const unique = [
  { title: "World-class learning", image: UNIQUE_IMAGES.worldClass },
  { title: "Flexible learning", image: UNIQUE_IMAGES.flexible },
  { title: "Accessibility", image: UNIQUE_IMAGES.accessibility },
  { title: "Sustainability", image: UNIQUE_IMAGES.sustainability },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="bg-white py-16 md:py-20">
        <div className="site-container">
          <p className="section-kicker">Choose a programme</p>
          <h2 className="section-title">Fully online. Same degrees as german-uds.de.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {catalogues.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group overflow-hidden rounded-[15px] bg-mist transition duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-blinker text-[28px] font-semibold text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm text-navy/70">{item.meta}</p>
                  <span className="btn-secondary mt-4">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="site-container">
          <p className="section-kicker">All programmes</p>
          <h2 className="section-title">Pick a Master&apos;s or MBA</h2>
          <div className="mt-10">
            <StudyExplorer />
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{ background: "radial-gradient(circle at center, #1e40af 0%, #1e3a8a 25%, #000 60%)" }}
      >
        <div className="site-container">
          <p className="text-center font-blinker text-lg font-bold text-[#f18800] md:text-xl">
            What makes German UDS unique
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center font-blinker text-2xl font-semibold text-white md:text-4xl">
            Next-generation learning without borders.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {unique.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-md bg-mist p-5 transition duration-300 hover:shadow-lg"
              >
                <div className="relative mb-4 h-44 overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1280px) 22vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-blinker text-xl font-semibold text-navy">{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="site-container">
          <h2 className="section-title">Questions</h2>
          <div className="mt-8">
            <Faq />
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
