"use client";

import Link from "next/link";
import { useState } from "react";

const steps = [
  {
    id: "fast",
    title: "1. Fast Track",
    time: "1 year · 60 ECTS · €7,500",
    body: "If you already hold a STEM bachelor's with 240 ECTS or equivalent, complete a German UDS Master's in four quarters — fully online, English, full-time or part-time.",
    href: "/fast-track",
  },
  {
    id: "degree",
    title: "2. Two-year Master's",
    time: "2 years · 120 ECTS · €7,500 p.a.",
    body: "The standard route if your bachelor's is 180 ECTS. Intakes in April and October. English throughout, studied from India.",
    href: "/study/masters",
  },
  {
    id: "mba",
    title: "3. MBA",
    time: "1 year · 60 ECTS · €7,500",
    body: "For professionals with at least three years' experience in a digital environment. Complete from India while you work.",
    href: "/study/mba",
  },
  {
    id: "next",
    title: "4. After graduation",
    time: "Work, or Berlin option",
    body: "Use the German university degree when applying for jobs. Or explore The Founder's MBAs if you later want a Berlin-based founder pathway.",
    href: "/founders-mba",
  },
];

export function Pathway() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-navy/10">
        {steps.map((step, i) => (
          <button
            key={step.id}
            type="button"
            onClick={() => setActive(i)}
            className={`border-b-2 pb-2 text-[0.78rem] font-semibold uppercase tracking-[0.08em] transition-colors ${
              active === i ? "border-[#fd9800] text-navy" : "border-transparent text-gray-500 hover:text-navy"
            }`}
          >
            {step.title}
          </button>
        ))}
      </div>
      <div className="pt-6">
        <p className="text-sm font-semibold text-[#f18800]">{steps[active].time}</p>
        <h3 className="mt-1 font-blinker text-2xl font-semibold text-navy">{steps[active].title}</h3>
        <p className="mt-3 text-gray-600">{steps[active].body}</p>
        <Link href={steps[active].href} className="btn-secondary mt-5">
          Open this step →
        </Link>
      </div>
    </div>
  );
}
