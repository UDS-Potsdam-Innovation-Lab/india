import Link from "next/link";
import type { Program } from "@/lib/programs";
import { PageHero } from "@/components/PageHero";
import { Cta } from "@/components/Cta";
import { programImage } from "@/lib/media";

export function ProgramDetail({ program }: { program: Program }) {
  return (
    <>
      <PageHero
        kicker={program.kind === "master" ? "Master's programme" : "MBA programme"}
        title={program.title}
        body={program.tagline}
        image={programImage(program.slug)}
      />
      <section className="site-container py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="section-title">Overview</h2>
              <p className="mt-4 leading-relaxed text-gray-700">{program.overview}</p>
            </div>
            <div className="border-t border-navy/10 pt-6">
              <h2 className="font-blinker text-2xl font-semibold text-navy">Why this programme from India</h2>
              <p className="mt-3 text-gray-700">{program.indiaFit}</p>
            </div>
            <div>
              <h2 className="section-title">Programme objectives</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
                {program.objectives.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="section-title">Curriculum</h2>
              <div className="mt-4 divide-y divide-navy/10 border-y border-navy/10">
                {program.modules.map((m) => (
                  <details key={m.quarter} className="py-4" open>
                    <summary className="cursor-pointer font-semibold text-navy">{m.quarter}</summary>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
                      {m.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </div>
            <div>
              <h2 className="section-title">Electives</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {program.electives.map((e) => (
                  <li key={e} className="rounded-full bg-mist px-3 py-1 text-sm text-navy">
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="section-title">Career outlook</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
                {program.career.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Graduation confers a German university degree. It does not guarantee a job, salary or visa.
                Graduates are eligible to apply for roles that require a recognised Master&apos;s or MBA.
              </p>
            </div>
          </div>
          <aside className="space-y-4">
            <div className="soft-panel">
              <h2 className="font-blinker text-xl font-semibold text-navy">Programme details</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div><dt className="text-gray-500">Duration</dt><dd className="text-navy">{program.duration}</dd></div>
                <div><dt className="text-gray-500">Language</dt><dd className="text-navy">{program.language}</dd></div>
                <div><dt className="text-gray-500">Fees</dt><dd className="text-navy">{program.fees}</dd></div>
                <div><dt className="text-gray-500">Study mode</dt><dd className="text-navy">{program.mode} · fully online</dd></div>
                <div><dt className="text-gray-500">Application deadline</dt><dd className="text-navy">20 September 2026</dd></div>
                {program.coordinator ? (
                  <div><dt className="text-gray-500">Coordinator</dt><dd className="text-navy">{program.coordinator}</dd></div>
                ) : null}
              </dl>
              <Link href={program.applyPath} className="btn-cta mt-6 w-full">
                Apply
              </Link>
              <a href={program.officialUrl} className="btn-secondary mt-4 inline-flex" target="_blank" rel="noreferrer">
                Official page on german-uds.de →
              </a>
            </div>
            <div className="border-t border-navy/10 pt-6">
              <h3 className="font-semibold text-navy">Entry requirements</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                {program.requirements.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                Payment: yearly €7,500, or quarterly instalments at €8,000 per year (€2,000 per quarter).
                Master&apos;s students may extend studies free of charge up to 6 years; MBA students up to 3 years, after paying for the programme.
              </p>
            </div>
          </aside>
        </div>
      </section>
      <Cta />
    </>
  );
}
