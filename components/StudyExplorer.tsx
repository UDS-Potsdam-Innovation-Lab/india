"use client";

import Image from "next/image";
import { useState } from "react";
import { mbas, masters } from "@/lib/programs";
import { CATALOGUE_IMAGES } from "@/lib/media";
import { SITE } from "@/lib/site";
import { ProgramCard } from "./ProgramCard";

const tabs = [
  { id: "master", label: "Master's" },
  { id: "mba", label: "MBA" },
  { id: "micro", label: "Micro-Degrees" },
] as const;

export function StudyExplorer() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("master");

  return (
    <div>
      <div className="flex flex-wrap gap-x-8 border-b border-navy/10" role="tablist" aria-label="Programme type">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`border-b-2 pb-2 text-[0.78rem] font-semibold uppercase tracking-[0.08em] transition-colors ${
              tab === t.id ? "border-[#fd9800] text-navy" : "border-transparent text-gray-500 hover:text-navy"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-8">
        {tab === "master" ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {masters.map((p) => (
              <ProgramCard key={p.slug} program={p} />
            ))}
          </div>
        ) : null}
        {tab === "mba" ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {mbas.map((p) => (
              <ProgramCard key={p.slug} program={p} />
            ))}
          </div>
        ) : null}
        {tab === "micro" ? (
          <a
            href={SITE.microDegreeUrl}
            target="_blank"
            rel="noreferrer"
            className="group grid overflow-hidden rounded-[15px] bg-mist md:grid-cols-2"
          >
            <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[240px]">
              <Image
                src={CATALOGUE_IMAGES.micro}
                alt="Micro-Degrees"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8">
              <h3 className="font-blinker text-2xl font-semibold text-navy">Micro-Degrees</h3>
              <p className="mt-2 text-sm text-navy/70">3 months · 5 ECTS · €900</p>
              <span className="btn-secondary mt-5">Open on german-uds.de →</span>
            </div>
          </a>
        ) : null}
      </div>
    </div>
  );
}
