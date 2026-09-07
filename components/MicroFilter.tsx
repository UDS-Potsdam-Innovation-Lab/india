import { microDegrees, microOfficialUrl } from "@/lib/programs";

export function MicroFilter() {
  const items = [...microDegrees].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <ul className="divide-y divide-navy/10 border-y border-navy/10">
      {items.map((item) => (
        <li key={item.slug}>
          <a
            href={microOfficialUrl(item.slug)}
            target="_blank"
            rel="noreferrer"
            className="group flex items-baseline justify-between gap-6 py-4 transition-colors hover:text-[#f18800]"
          >
            <span className="font-blinker text-xl font-semibold text-navy group-hover:text-[#f18800] sm:text-2xl">
              {item.title}
            </span>
            <span className="shrink-0 text-sm font-semibold text-[#f18800]">
              <span className="hidden sm:inline">german-uds.de </span>→
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
