"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Counter } from "./Counter";
import { HERO_IMAGE } from "@/lib/media";
import { masters, mbas } from "@/lib/programs";
import { SITE } from "@/lib/site";

const ALL_PROGRAMMES = [...masters, ...mbas];

// Alternates Master's and MBA so both awards appear early in the cycle.
const SPOTLIGHT = [
  "applied-ai",
  "digital-transformation",
  "cybersecurity",
  "financial-technology",
  "quantum-computing",
  "digital-management",
]
  .map((slug) => ALL_PROGRAMMES.find((p) => p.slug === slug)?.title)
  .filter((title): title is string => Boolean(title));

export function HomeHero() {
  const [spot, setSpot] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setSpot((v) => (v + 1) % SPOTLIGHT.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <Image
        src={HERO_IMAGE}
        alt="Students at the German University of Digital Science"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      <div aria-hidden className="hero-scrim" />

      <div className="site-container relative py-16 lg:py-20">
        <div className="hero-copy max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
            <span className="pulse-dot" />
            Applications open · {SITE.deadlines.nextIntake} intake
          </p>

          <h1 className="mt-5 font-blinker text-[2.2rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-[2.8rem] lg:text-[3.4rem]">
            <span className="kinetic-line">
              <span style={{ animationDelay: "0.05s" }}>A German degree.</span>
            </span>
            <span className="kinetic-line">
              <span style={{ animationDelay: "0.18s" }}>
                Earned from <span className="text-orange">India.</span>
              </span>
            </span>
          </h1>

          <p className="mt-4 flex flex-wrap items-baseline gap-x-2 text-sm font-semibold uppercase tracking-[0.1em] text-white/70">
            Now enrolling
            <span className="text-white/40">/</span>
            <span key={spot} className="cycler font-blinker text-base normal-case tracking-normal text-[#fd9800]">
              {SPOTLIGHT[spot]}
            </span>
          </p>

          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/85">
            State-recognised Master&apos;s and MBA programmes from the German University of Digital
            Science — taught fully online in English. No relocation, no student visa, no blocked account.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/apply" className="btn-cta">
              Apply now
            </Link>
            <Link href="/study" className="btn-on-dark">
              Explore programmes
            </Link>
          </div>

          <dl className="mt-9 grid max-w-xl grid-cols-3 gap-5 border-t border-white/25 pt-6">
            <div>
              <dt className="font-blinker text-[1.6rem] font-semibold leading-none text-white">
                <Counter to={12} />
              </dt>
              <dd className="mt-2 text-[11px] uppercase tracking-[0.1em] text-white/70">
                Master&apos;s &amp; MBA routes
              </dd>
            </div>
            <div>
              <dt className="font-blinker text-[1.6rem] font-semibold leading-none text-white">
                <Counter to={SITE.fees.mastersYear} prefix="€" />
              </dt>
              <dd className="mt-2 text-[11px] uppercase tracking-[0.1em] text-white/70">
                Tuition per year
              </dd>
            </div>
            <div>
              <dt className="font-blinker text-[1.6rem] font-semibold leading-none text-white">100%</dt>
              <dd className="mt-2 text-[11px] uppercase tracking-[0.1em] text-white/70">Online</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
