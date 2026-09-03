"use client";

import { useState } from "react";
import { FAQ } from "@/lib/site";

export function Faq({ items = FAQ }: { items?: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-navy/10 border-y border-navy/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-blinker text-lg font-semibold text-navy">{item.q}</span>
              <span className="text-[#f18800]" aria-hidden>
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen ? <p className="pb-5 text-sm leading-relaxed text-gray-600">{item.a}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
