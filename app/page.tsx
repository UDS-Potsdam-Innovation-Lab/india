import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CostCalculator } from "@/components/CostCalculator";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { HomeHero } from "@/components/HomeHero";
import { IndiaEdge } from "@/components/IndiaEdge";
import { JourneyScroll } from "@/components/JourneyScroll";
import { Marquee } from "@/components/Marquee";
import { Pathway } from "@/components/Pathway";
import { Reveal } from "@/components/Reveal";
import { StudyExplorer } from "@/components/StudyExplorer";
import { ACCREDITORS, UNIQUE_IMAGES } from "@/lib/media";
import { canonicalToMain, MAIN_PATHS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "German-accredited university degrees, studied from home in India",
  description:
    "German University of Digital Science offers fully online, state-recognised Master's, MBA and Micro-Degree programmes. Stay in India and graduate with a German university degree.",
  ...canonicalToMain(MAIN_PATHS.home),
};

const catalogues = [
  {
    href: "/study/masters",
    title: "Master's",
    meta: "2 years · 120 ECTS · €7,500 p.a.",
    blurb: "AI, cybersecurity, digital reality, leadership and quantum computing.",
  },
  {
    href: "/study/mba",
    title: "MBA",
    meta: "1 year · 60 ECTS · €7,500",
    blurb: "Seven specialisations for professionals with three years' digital experience.",
  },
  {
    href: "/study/micro-degrees",
    title: "Micro-Degrees",
    meta: "3 months · 5 ECTS · €900",
    blurb: "Single accredited modules with no application process. Open on german-uds.de to enrol.",
  },
];

const unique = [
  {
    title: "World-class faculty",
    body: "German professors, reachable from anywhere on the planet.",
    image: UNIQUE_IMAGES.worldClass,
  },
  {
    title: "Flexible by design",
    body: "Online lectures, tutorials and virtual team projects at your pace.",
    image: UNIQUE_IMAGES.flexible,
  },
  {
    title: "Access without borders",
    body: "A German university degree without being physically present.",
    image: UNIQUE_IMAGES.accessibility,
  },
  {
    title: "Lower barriers",
    body: "Non-profit tuition instead of relocation-scale budgets.",
    image: UNIQUE_IMAGES.sustainability,
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="border-b border-navy/[0.07] bg-white py-8">
        <div className="site-container flex flex-col items-center gap-6 md:flex-row">
          <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/45">
            Accredited &amp; state-recognised
          </p>
          <Marquee className="w-full">
            {ACCREDITORS.map((item) => (
              <a
                key={item.alt}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-32 shrink-0 items-center justify-center opacity-60 transition hover:opacity-100"
              >
                <img src={item.src} alt={item.alt} className="h-full w-full object-contain" />
              </a>
            ))}
          </Marquee>
        </div>
      </section>

      <IndiaEdge />

      <JourneyScroll />

      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="site-container relative">
          <Reveal>
            <p className="section-kicker">Choose a programme</p>
            <h2 className="section-title mt-2">Twelve accredited routes, all fully online.</h2>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {catalogues.map((item, index) => (
              <Reveal key={item.href} delay={index * 90}>
                <Link
                  href={item.href}
                  className="group ring-grad flex h-full flex-col overflow-hidden rounded-[20px] bg-mist transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(4,4,97,0.16)]"
                >
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-blinker text-[28px] font-semibold text-navy">{item.title}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#f18800]">
                      {item.meta}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/65">{item.blurb}</p>
                    <span className="btn-secondary mt-5">Explore →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-16">
            <Reveal>
              <h3 className="font-blinker text-2xl font-semibold text-navy">Browse the full catalogue</h3>
            </Reveal>
            <div className="mt-8">
              <StudyExplorer />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper py-16 md:py-24">
        <div className="aurora opacity-20">
          <span />
          <span />
          <span />
        </div>
        <div className="site-container relative grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="section-kicker">Your route</p>
            <h2 className="section-title mt-2">Pick the entry point that matches your transcript.</h2>
            <p className="mt-4 text-gray-600">
              Four years of STEM behind you? Fast Track closes a Master&apos;s in one year. Otherwise the
              two-year Master&apos;s or the one-year MBA is the standard door.
            </p>
            <div className="mt-8">
              <Pathway />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <CostCalculator />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="site-container relative">
          <Reveal>
            <p className="section-kicker">What makes German UDS different</p>
            <h2 className="section-title mt-2 max-w-2xl">
              Next-generation learning <span className="text-gradient">without borders.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {unique.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="group h-full overflow-hidden rounded-[20px] bg-mist p-5 transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(4,4,97,0.14)]">
                  <div className="relative mb-5 h-44 overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1280px) 22vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.07]"
                    />
                  </div>
                  <h3 className="font-blinker text-xl font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="site-container">
          <Reveal>
            <p className="section-kicker">Straight answers</p>
            <h2 className="section-title mt-2">Questions applicants actually ask.</h2>
          </Reveal>
          <div className="mt-10">
            <Faq />
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
