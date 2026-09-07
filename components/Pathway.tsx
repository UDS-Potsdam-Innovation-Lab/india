"use client";

import Link from "next/link";
import { useState } from "react";

const steps = [
  {
    id: "fast",
    label: "Fast Track",
    title: "Fast Track Master's",
    time: "1 year · 60 ECTS · €7,500",
    body: "If you already hold a STEM bachelor's with 240 ECTS or equivalent, complete a German UDS Master's in four quarters — fully online, English, full-time or part-time.",
    href: "/fast-track",
  },
  {
    id: "degree",
    label: "Master's",
    title: "Two-year Master's",
    time: "2 years · 120 ECTS · €7,500 p.a.",
    body: "The standard route if your bachelor's carries 180 ECTS. Intakes in April and October, English throughout, studied from home.",
    href: "/study/masters",
  },
  {
    id: "mba",
    label: "MBA",
    title: "One-year MBA",
    time: "1 year · 60 ECTS · €7,500",
    body: "For professionals with at least three years' experience in a digital environment. Complete it from home while you keep working.",
    href: "/study/mba",
  },
];

export function Pathway() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <div className="ring-grad glass rounded-[20px] p-6 md:p-7">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Entry route">
        {steps.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active === index}
            onClick={() => setActive(index)}
            className={`rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors ${
              active === index
                ? "bg-[#fd9800] text-white"
                : "bg-navy/[0.06] text-navy/60 hover:bg-navy/10 hover:text-navy"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-6 min-h-[190px]">
        <p className="font-blinker text-5xl font-semibold text-navy/10">
          {String(active + 1).padStart(2, "0")}
        </p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#f18800]">{step.time}</p>
        <h3 className="mt-2 font-blinker text-2xl font-semibold text-navy">{step.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-navy/70">{step.body}</p>
        <Link href={step.href} className="btn-secondary mt-5">
          Open this step →
        </Link>
      </div>
    </div>
  );
}
