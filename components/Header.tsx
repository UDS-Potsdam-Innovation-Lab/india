"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { NAV, SITE } from "@/lib/site";

const more = [
  { href: "/fast-track", label: "Fast Track" },
  { href: "/founders-mba", label: "Founder's MBAs" },
  { href: "/why-india", label: "Why study from India" },
  { href: "/student-affairs", label: "Student Affairs" },
  { href: "/admissions", label: "Admissions" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const active = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/95 backdrop-blur-[100px]">
      <nav aria-label="Top" className="site-container">
        <div className="flex h-[4.5rem] items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-6">
            <Logo />
            <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`inline-block border-b-2 pb-0.5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] transition-colors md:text-[0.78rem] ${
                      active(item.href)
                        ? "border-orange text-navy"
                        : "border-transparent text-gray-600 hover:border-gray-400 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="relative">
                <button
                  type="button"
                  className={`inline-block border-b-2 pb-0.5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] md:text-[0.78rem] ${
                    more.some((item) => active(item.href))
                      ? "border-orange text-navy"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                  aria-expanded={moreOpen}
                  onClick={() => setMoreOpen((v) => !v)}
                >
                  More
                </button>
                {moreOpen ? (
                  <ul className="absolute left-0 top-full mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-200">
                    {more.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-sm text-navy hover:bg-mist"
                          onClick={() => setMoreOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/apply" className="btn-cta hidden sm:inline-flex">
              Apply now
            </Link>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-md lg:hidden"
              aria-expanded={open}
              aria-label="Open site menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="flex h-8 w-8 flex-col items-center justify-center gap-[5.5px] rounded-[6px] bg-gray-100/70 ring-1 ring-inset ring-gray-300/45">
                <span className={`block h-[1.75px] w-[18px] rounded-[2px] bg-ink transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`block h-[1.75px] w-[18px] rounded-[2px] bg-ink transition ${open ? "opacity-0" : ""}`} />
                <span className={`block h-[1.75px] w-[18px] rounded-[2px] bg-ink transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </nav>
      {open ? (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <ul className="site-container flex flex-col py-4 font-poppins">
            {[...NAV, ...more].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-sm font-semibold text-navy"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link href="/apply" className="btn-cta w-full" onClick={() => setOpen(false)}>
                Apply now
              </Link>
            </li>
            <li className="pt-2 text-xs text-gray-500">
              Official programmes:{" "}
              <a className="text-orange underline" href={SITE.mainSite}>
                german-uds.de
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
