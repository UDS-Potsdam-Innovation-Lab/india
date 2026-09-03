"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { allPrograms, mbas, masters } from "@/lib/programs";
import { SITE } from "@/lib/site";

const cities = ["Bengaluru", "Hyderabad", "Pune", "Mumbai", "Delhi NCR", "Chennai", "Kolkata", "Other / remote"];
const interests = [
  ...masters.map((p) => p.title),
  ...mbas.map((p) => p.title),
  "Fast Track",
  "Micro-Degree",
  "Founder's MBAs",
];

function resolvePreset(preset?: string) {
  if (!preset) return interests[0];
  const decoded = decodeURIComponent(preset);
  if (interests.includes(decoded)) return decoded;
  const match = allPrograms().find((p) => p.slug === decoded || p.title === decoded);
  if (match) return match.title;
  if (/fast/i.test(decoded)) return "Fast Track";
  if (/micro/i.test(decoded)) return "Micro-Degree";
  if (/founder/i.test(decoded)) return "Founder's MBAs";
  return interests[0];
}

export function ApplyForm({ preset }: { preset?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState(cities[0]);
  const [program, setProgram] = useState(resolvePreset(preset));
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`India enquiry: ${program}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city}\nProgramme: ${program}\n\n${message}\n\nI agree that German UDS may contact me about admissions.`,
    );
    return `mailto:${SITE.studentAffairsEmail}?subject=${subject}&body=${body}`;
  }, [name, email, phone, city, program, message]);

  return (
    <form
      className="border-t border-navy/10 pt-6"
      onSubmit={(e) => {
        e.preventDefault();
        if (!consent) return;
        window.location.href = mailto;
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm">
          Full name
          <input required className="field" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="text-sm">
          Email
          <input required type="email" className="field" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="text-sm">
          Phone (India)
          <input className="field" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label className="text-sm">
          City
          <select className="field" value={city} onChange={(e) => setCity(e.target.value)}>
            {cities.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className="text-sm sm:col-span-2">
          Programme interest
          <select className="field" value={program} onChange={(e) => setProgram(e.target.value)}>
            {interests.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className="text-sm sm:col-span-2">
          How can Student Affairs help?
          <textarea className="field" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
      </div>
      <label className="mt-4 flex items-start gap-2 text-sm text-gray-600">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 accent-orange" required />
        I agree that German University of Digital Science gGmbH may process this enquiry under the privacy policy. I can withdraw consent at any time.
      </label>
      <div className="mt-6 flex flex-wrap gap-3">
        <button type="submit" className="btn-cta" disabled={!consent}>
          Email Student Affairs
        </button>
        <a href={SITE.applyUrl} className="btn-secondary" target="_blank" rel="noreferrer">
          Official application portal →
        </a>
        <Link href="/student-affairs" className="btn-secondary self-center">
          Book a drop-in instead →
        </Link>
      </div>
    </form>
  );
}
