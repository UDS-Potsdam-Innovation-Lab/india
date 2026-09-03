"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "guds-india-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(KEY);
    if (!stored) setVisible(true);
  }, []);

  function choose(value: "accepted" | "essential") {
    window.localStorage.setItem(KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-navy/10 bg-white p-4"
    >
      <div className="site-container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl text-sm text-gray-600">
          We use essential cookies to run this site. Optional analytics cookies are used only if you
          accept. See our{" "}
          <Link className="font-semibold text-[#f18800]" href="/cookies">
            cookie notice
          </Link>{" "}
          and{" "}
          <Link className="font-semibold text-[#f18800]" href="/privacy">
            privacy policy
          </Link>
          .
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" className="btn-ghost" onClick={() => choose("essential")}>
            Essential only
          </button>
          <button type="button" className="btn-cta" onClick={() => choose("accepted")}>
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
