import Image from "next/image";
import Link from "next/link";
import { HERO_IMAGE } from "@/lib/media";
import { SITE } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[82vh] overflow-hidden bg-paper">
      <Image
        src={HERO_IMAGE}
        alt="Students at the German University of Digital Science"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="site-container relative z-10 flex min-h-[82vh] items-end pb-12 pt-28 md:pb-16">
        <div className="max-w-lg rounded-[15px] bg-white/95 p-6 shadow-[0_20px_50px_rgba(4,4,97,0.12)] md:p-8">
          <p className="section-kicker">German UDS</p>
          <h1 className="mt-2 font-blinker text-3xl font-semibold leading-tight text-navy md:text-4xl">
            Study from India. Graduate German-accredited.
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/apply" className="btn-cta">
              Apply now
            </Link>
            <Link href="/study" className="btn-secondary">
              Programmes →
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Next intake {SITE.deadlines.nextIntake}
          </p>
        </div>
      </div>
    </section>
  );
}
