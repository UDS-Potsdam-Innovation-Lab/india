import Link from "next/link";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { SITE } from "@/lib/site";

const removed = ["No APS certificate", "No blocked account", "No student visa", "No relocation flights"];

export function IndiaEdge() {
  return (
    <section className="relative overflow-hidden bg-paper py-16 md:py-24">
      <div className="aurora opacity-25">
        <span />
        <span />
        <span />
      </div>
      <div className="tech-grid" />

      <div className="site-container relative">
        <Reveal>
          <p className="section-kicker">Built for India</p>
          <h2 className="section-title mt-2 max-w-2xl">
            The degree travels. <span className="text-gradient">You don&apos;t have to.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-gray-600">
            Everything that usually makes a German degree expensive and slow to reach is the part we removed.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <article className="ring-grad glass spotlight flex h-full flex-col justify-between rounded-[20px] p-7 md:p-9">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f18800]">
                  The whole point
                </p>
                <h3 className="mt-3 font-blinker text-3xl font-semibold leading-tight text-navy md:text-4xl">
                  Nothing to relocate. Nobody to convince at a consulate.
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-navy/70">
                  German UDS programmes are completed digitally, so the relocation apparatus never enters
                  the picture. You stay with family, keep your network, and study in English on a German
                  university calendar.
                </p>
              </div>
              <div>
                <div className="mt-7 flex flex-wrap gap-2">
                  {removed.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full bg-navy/[0.06] px-3 py-1.5 text-xs font-semibold text-navy/75"
                    >
                      <svg viewBox="0 0 16 16" className="size-3.5 text-[#f18800]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
                      </svg>
                      {item}
                    </span>
                  ))}
                </div>
                <Link href="/why-india" className="btn-secondary mt-7">
                  What we will and will not claim →
                </Link>
              </div>
            </article>
          </Reveal>

          <Reveal delay={80}>
            <article className="glass flex h-full flex-col justify-between rounded-[20px] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f18800]">Tuition</p>
              <p className="mt-4 font-blinker text-4xl font-semibold text-navy">
                <Counter to={SITE.fees.mastersYear} prefix="€" />
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">
                Per year, non-profit. With no German rent to add, tuition is the main cost of the degree.
              </p>
            </article>
          </Reveal>

          <Reveal delay={140}>
            <article className="glass flex h-full flex-col justify-between rounded-[20px] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f18800]">Time zone</p>
              <p className="mt-4 font-blinker text-2xl font-semibold leading-tight text-navy">
                Evening IST, not 3 a.m.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">
                Student Affairs drop-ins land around 16:30–18:00 IST, and lectures are recorded either way.
              </p>
            </article>
          </Reveal>

          <Reveal delay={200}>
            <article className="glass flex h-full flex-col justify-between rounded-[20px] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f18800]">Career</p>
              <p className="mt-4 font-blinker text-2xl font-semibold leading-tight text-navy">
                Keep earning while you study
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">
                Part-time mode is built in. No career break, no resignation letter, no gap on the CV.
              </p>
            </article>
          </Reveal>

          <Reveal delay={260}>
            <article className="glass flex h-full flex-col justify-between rounded-[20px] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f18800]">Payment</p>
              <p className="mt-4 font-blinker text-4xl font-semibold text-navy">
                <Counter to={SITE.fees.quarterlyInstalment} prefix="€" />
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">
                Per quarter if you prefer instalments to a lump sum. Yearly total €
                {SITE.fees.quarterlyYear.toLocaleString("en-IN")}.
              </p>
            </article>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <article className="ring-grad glass spotlight flex h-full flex-col justify-between rounded-[20px] p-7">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f18800]">
                  For 4-year STEM graduates
                </p>
                <h3 className="mt-3 font-blinker text-2xl font-semibold text-navy">
                  Fast Track finishes a German Master&apos;s in one year
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">
                  Most four-year B.E. and B.Tech degrees carry 240 ECTS or the equivalent. That is exactly
                  the entry point for the 60 ECTS, four-quarter route.
                </p>
              </div>
              <Link href="/fast-track" className="btn-secondary mt-6">
                Check Fast Track eligibility →
              </Link>
            </article>
          </Reveal>

          <Reveal delay={180} className="lg:col-span-2">
            <article className="ring-grad glass spotlight flex h-full flex-col justify-between rounded-[20px] p-7">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f18800]">
                  Someone to ask
                </p>
                <h3 className="mt-3 font-blinker text-2xl font-semibold text-navy">
                  Student Affairs answers the practical questions
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/70">
                  Document checklists, English B2 evidence, transcript conversions, payment routes from
                  your own bank, and what the degree does for a European application.
                </p>
              </div>
              <Link href="/student-affairs" className="btn-secondary mt-6">
                Book a drop-in session →
              </Link>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
