"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { microDegrees, type MicroDegree } from "@/lib/programs";
import { microImage } from "@/lib/media";
import { SITE } from "@/lib/site";

const cats = ["All", "AI", "Cybersecurity", "Business", "XR", "Foundations"] as const;

export function MicroFilter() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [q, setQ] = useState("");

  const items = useMemo(() => {
    return microDegrees.filter((m) => {
      const catOk = cat === "All" || m.category === cat;
      const qOk = !q || `${m.title} ${m.summary}`.toLowerCase().includes(q.toLowerCase());
      return catOk && qOk;
    });
  }, [cat, q]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-wrap gap-x-6 border-b border-navy/10" role="tablist" aria-label="Micro-Degree topic">
          {cats.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`border-b-2 pb-2 text-[0.78rem] font-semibold uppercase tracking-[0.08em] transition-colors ${
                cat === c ? "border-[#fd9800] text-navy" : "border-transparent text-gray-500 hover:text-navy"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <input
          type="search"
          placeholder="Search micro-degrees"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="field md:max-w-xs"
        />
      </div>
      <p className="mt-6 text-sm text-gray-500">{items.length} programmes</p>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((m) => (
          <MicroCard key={m.slug} item={m} />
        ))}
      </div>
    </div>
  );
}

function MicroCard({ item }: { item: MicroDegree }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[15px] bg-mist">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={microImage(item.slug)}
          alt={item.title}
          fill
          sizes="(min-width: 1280px) 28vw, (min-width: 768px) 44vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#f18800]">{item.category}</p>
        <h3 className="mt-2 font-blinker text-xl font-semibold text-navy">{item.title}</h3>
        <p className="mt-2 text-sm text-navy/70">
          {item.ects} ECTS · {item.duration} · {item.fee}
        </p>
        <a href={SITE.microDegreeUrl} className="btn-cta mt-5" target="_blank" rel="noreferrer">
          Enrol
        </a>
      </div>
    </article>
  );
}
