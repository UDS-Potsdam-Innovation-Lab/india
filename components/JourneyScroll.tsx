"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { JOURNEY_IMAGES } from "@/lib/media";

type Stage = {
  id: "classes" | "degree" | "career";
  step: string;
  kicker: string;
  title: string;
  body: string;
  points: string[];
  image: string;
  alt: string;
  fit: "cover" | "contain";
  cta: { href: string; label: string };
};

const STAGES: Stage[] = [
  {
    id: "classes",
    step: "01",
    kicker: "While you study",
    title: "Live classes, from where you already are",
    body: "Lectures, tutorials and team projects run online in English on a quarterly calendar. Recordings and rolling deadlines mean your timezone works — no relocation, no campus commute.",
    points: [
      "Online lectures and tutorials in English",
      "Four quarters a year, part-time possible",
      "COVE virtual campus for cohort life",
    ],
    image: JOURNEY_IMAGES.classes,
    alt: "German UDS live lecture in the virtual campus",
    fit: "cover",
    cta: { href: "/study", label: "See how a quarter runs" },
  },
  {
    id: "degree",
    step: "02",
    kicker: "On completion",
    title: "A full, state-recognised German degree",
    body: "You graduate with the same M.Sc. or MBA awarded in Potsdam — accredited by the German Accreditation Council and assessed by ASIIN. Not a private diploma: an official German UDS credential. The certificate shown is an example only.",
    points: [
      "Awarded by German UDS, Land Brandenburg",
      "120 ECTS Master's · 60 ECTS MBA",
      "Accreditation listed on the public register",
    ],
    image: JOURNEY_IMAGES.degree,
    alt: "Example German UDS Micro-Degree certificate (sample, signatures removed)",
    fit: "contain",
    cta: { href: "/about", label: "How accreditation works" },
  },
  {
    id: "career",
    step: "03",
    kicker: "Afterwards",
    title: "A CV that reads on the European market",
    body: "Your résumé carries a German university postgraduate degree, taught in English. That is the credential employers screen for in Germany, across the EU and internationally. The CV shown is an example only.",
    points: [
      "Recognised postgraduate qualification",
      "Apply from home, Germany or remotely",
      "Eligibility to apply — never a guaranteed placement",
    ],
    image: JOURNEY_IMAGES.career,
    alt: "Example graduate CV with a German UDS Master's (sample, signatures removed)",
    fit: "contain",
    cta: { href: "/why-india", label: "What this does and does not promise" },
  },
];

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const smoother = (x: number) => x * x * x * (x * (6 * x - 15) + 10);

export function JourneyScroll() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rigRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAnimated(wide.matches && !reduced.matches);
    sync();
    wide.addEventListener("change", sync);
    reduced.addEventListener("change", sync);
    return () => {
      wide.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!animated) return;

    const last = STAGES.length - 1;
    let frame = 0;

    const paint = (cursor: number) => {
      const ratio = cursor / last;

      if (rigRef.current) {
        rigRef.current.style.transform = `translate3d(${ratio * 36}px, ${ratio * 52}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${ratio * 36}px, ${ratio * 52}px, 0) scale(${1 + ratio * 0.22})`;
      }
      if (fillRef.current) {
        fillRef.current.style.transform = `scaleY(${Math.max(ratio, 0.03)})`;
      }

      STAGES.forEach((_, index) => {
        const delta = index - cursor;
        const distance = Math.min(Math.abs(delta), 1.6);

        const card = cardRefs.current[index];
        if (card) {
          card.style.opacity = String(clamp(1 - distance * 1.05));
          card.style.zIndex = String(100 - Math.round(distance * 50));
          card.style.pointerEvents = distance < 0.5 ? "auto" : "none";
          card.style.transform =
            `translate3d(${delta * 9}%, ${delta * -7 + distance * 5}%, ${-distance * 300}px) ` +
            `rotateY(${delta * -64}deg) rotateX(${distance * 6}deg) ` +
            `rotate(${delta * -2.5}deg) scale(${1 - distance * 0.09})`;
        }

        const panel = panelRefs.current[index];
        if (panel) {
          panel.style.opacity = String(clamp(1 - Math.abs(delta) * 1.45));
          panel.style.transform = `translate3d(0, ${delta * -46}px, 0)`;
          panel.style.filter = `blur(${Math.min(Math.abs(delta) * 7, 10)}px)`;
          panel.style.pointerEvents = Math.abs(delta) < 0.5 ? "auto" : "none";
        }

        const dot = dotRefs.current[index];
        if (dot) {
          const nearness = clamp(1 - Math.abs(delta) * 1.7);
          dot.style.transform = `scale(${1 + nearness})`;
          dot.style.opacity = String(0.28 + nearness * 0.72);
        }
      });
    };

    const measure = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = Math.max(rect.height - window.innerHeight, 1);
      const progress = clamp(-rect.top / scrollable);
      const raw = progress * last;
      const index = Math.min(Math.floor(raw), last - 1);
      paint(index + smoother(clamp(raw - index)));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        measure();
      });
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [animated]);

  const heading = (
    <>
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#fd9800]">
        Student life journey
      </p>
      <h2 className="mt-3 max-w-xl font-blinker text-3xl font-semibold leading-tight text-white md:text-[2.6rem]">
        From your first live lecture to your first European application.
      </h2>
    </>
  );

  if (!animated) {
    return (
      <section className="relative overflow-hidden bg-[#05052a] py-16 md:py-20">
        <div className="aurora opacity-40">
          <span />
          <span />
          <span />
        </div>
        <div className="tech-grid tech-grid-dark" />
        <div className="site-container relative">
          {heading}
          <div className="mt-10 space-y-5">
            {STAGES.map((stage) => (
              <article key={stage.id} className="glass-dark overflow-hidden rounded-[18px]">
                <div className={`relative aspect-[16/10] ${stage.fit === "contain" ? "bg-white" : "bg-black"}`}>
                  {(stage.id === "degree" || stage.id === "career") && (
                    <span className="absolute left-3 top-3 z-10 rounded-md bg-[#fd9800] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                      Example
                    </span>
                  )}
                  <Image
                    src={stage.image}
                    alt={stage.alt}
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className={stage.fit === "contain" ? "object-contain" : "object-cover object-top"}
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#fd9800]">
                    {stage.step} · {stage.kicker}
                  </p>
                  <h3 className="mt-2 font-blinker text-2xl font-semibold text-white">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{stage.body}</p>
                  <ul className="mt-4 space-y-2">
                    {stage.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm text-white/80">
                        <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[#82b4fa]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link href={stage.cta.href} className="btn-secondary mt-5">
                    {stage.cta.label} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-[#05052a]">
      <div ref={trackRef} style={{ height: `${STAGES.length * 118}vh` }}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="aurora opacity-45">
            <span />
            <span />
            <span />
          </div>
          <div className="tech-grid tech-grid-dark" />

          <div className="site-container relative w-full">
            <div className="grid grid-cols-12 items-center gap-10">
              <div className="col-span-5">
                {heading}

                <div className="mt-10 flex gap-6">
                  <div className="relative w-px shrink-0 bg-white/12">
                    <span ref={fillRef} className="rail-fill" />
                    <div className="absolute -left-[5px] top-0 flex h-full flex-col justify-between">
                      {STAGES.map((stage, index) => (
                        <span
                          key={stage.id}
                          ref={(node) => {
                            dotRefs.current[index] = node;
                          }}
                          className="block size-[11px] rounded-full bg-[#fd9800] transition-none"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="journey-panel-stack relative h-[clamp(300px,46vh,430px)] flex-1">
                    {STAGES.map((stage, index) => (
                      <div
                        key={stage.id}
                        ref={(node) => {
                          panelRefs.current[index] = node;
                        }}
                        className="journey-panel"
                      >
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#fd9800]">
                          {stage.step} · {stage.kicker}
                        </p>
                        <h3 className="mt-3 font-blinker text-[1.75rem] font-semibold leading-snug text-white">
                          {stage.title}
                        </h3>
                        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">{stage.body}</p>
                        <ul className="mt-5 space-y-2.5">
                          {stage.points.map((point) => (
                            <li key={point} className="flex gap-2.5 text-sm text-white/85">
                              <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[#82b4fa]" />
                              {point}
                            </li>
                          ))}
                        </ul>
                        <Link href={stage.cta.href} className="btn-secondary mt-6">
                          {stage.cta.label} →
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-span-7">
                <div className="journey-scene relative h-[clamp(340px,58vh,560px)]">
                  <div
                    ref={glowRef}
                    className="pointer-events-none absolute inset-x-10 bottom-2 h-24 rounded-[100%] bg-[#82b4fa]/25 blur-3xl"
                  />
                  <div ref={rigRef} className="journey-rig absolute inset-0">
                    {STAGES.map((stage, index) => (
                      <div
                        key={stage.id}
                        ref={(node) => {
                          cardRefs.current[index] = node;
                        }}
                        className="journey-card"
                      >
                        <div className={`relative h-full w-full overflow-hidden rounded-[22px] border border-white/15 shadow-[0_50px_120px_rgba(0,0,0,0.6)] ${stage.fit === "contain" ? "bg-white" : "bg-[#05052a]"}`}>
                          {(stage.id === "degree" || stage.id === "career") && (
                            <span className="absolute left-4 top-4 z-10 rounded-md bg-[#fd9800] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                              Example
                            </span>
                          )}
                          <Image
                            src={stage.image}
                            alt={stage.alt}
                            fill
                            sizes="60vw"
                            priority={index === 0}
                            className={stage.fit === "contain" ? "object-contain p-3" : "object-cover object-top"}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
