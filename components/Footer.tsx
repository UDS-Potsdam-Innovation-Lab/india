import Link from "next/link";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

const accreditors = [
  {
    src: "https://german-uds.de/logo/logo-WR.png",
    alt: "Wissenschaftsrat",
    href: "https://www.wissenschaftsrat.de/download/archiv/Konzeptpr%C3%BCfungen.pdf?__blob=publicationFile&v=0",
  },
  {
    src: "https://german-uds.de/logo/logo-Akkreditierungsrat.png",
    alt: "German Accreditation Council",
    href: "https://antrag.akkreditierungsrat.de/akkrstudiengaenge/?hochschule=1e2b21b2-8dad-40a9-bd37-0c74b9116d39&limit=100",
  },
  {
    src: "https://german-uds.de/logo/logo-asiin.png",
    alt: "ASIIN",
    href: "http://www.asiin-ev.de/pages/de/asiin/akkreditierung-studiengaenge/akkreditierte-studiengaenge.php?suchbegriff=German+University+of+Digital+Science",
  },
  {
    src: "https://german-uds.de/logo/logo-brb.png",
    alt: "Land Brandenburg",
    href: "https://mwfk.brandenburg.de/mwfk/de/wissenschaft/hochschulen/nicht-staatliche-hochschulen/german-university-of-digital-science/",
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-udsblue text-white">
      <div className="site-container p-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start">
            <Logo variant="onDark" />
            <div className="mt-12 w-full max-w-lg">
              <h2 className="mb-2 text-left font-blinker text-lg font-semibold">Accredited by:</h2>
              <div className="flex w-full flex-wrap">
                {accreditors.map((item) => (
                  <div
                    key={item.alt}
                    className="relative m-1 flex h-12 w-[30%] items-center justify-center overflow-hidden rounded-xl bg-white p-2 opacity-90 hover:opacity-100"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block h-full w-full"
                    >
                      <img src={item.src} alt={item.alt} className="h-full w-full object-contain p-0.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-blinker text-lg font-semibold">QuickLinks</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><Link className="transition-colors hover:text-white" href="/study">Study programmes</Link></li>
              <li><Link className="transition-colors hover:text-white" href="/admissions">Application process</Link></li>
              <li><Link className="transition-colors hover:text-white" href="/student-affairs">Support for students</Link></li>
              <li><Link className="transition-colors hover:text-white" href="/fast-track">Fast Track</Link></li>
              <li><Link className="transition-colors hover:text-white" href="/founders-mba">Founder&apos;s MBAs</Link></li>
              <li>
                <a className="transition-colors hover:text-white" href={`${SITE.mainSite}/jobs`} target="_blank" rel="noreferrer">
                  Jobs@UDS
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-blinker text-lg font-semibold">Hot Links</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><Link className="transition-colors hover:text-white" href="/why-india">Study from India</Link></li>
              <li><Link className="transition-colors hover:text-white" href="/about">About German UDS</Link></li>
              <li><Link className="transition-colors hover:text-white" href="/research">Research centres</Link></li>
              <li>
                <a className="transition-colors hover:text-white" href={SITE.coveUrl} target="_blank" rel="noreferrer">
                  Campus of Virtual Education
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-white" href={SITE.mainSite} target="_blank" rel="noreferrer">
                  german-uds.de
                </a>
              </li>
              <li><Link className="transition-colors hover:text-white" href="/apply">Apply</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="font-blinker text-lg font-semibold">Headquarter CloudHouse</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
              <br />
              {SITE.address.city}
              <br />
              {SITE.address.country}
            </p>
            <p className="mt-3 text-sm text-white/80">
              <a className="hover:text-white" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              <br />
              Tel.: {SITE.phone}
            </p>
            <div className="mt-4 flex items-center gap-1">
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-white transition hover:bg-white/10 hover:text-gray-300"
                aria-label="Visit our LinkedIn page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-white transition hover:bg-white/10 hover:text-gray-300"
                aria-label="Visit our Instagram page"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-8 border-gray-700 opacity-50" />
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-white">
            <Link className="hover:text-gray-300" href="/imprint">Imprint</Link>
            <span className="text-white/40">|</span>
            <Link className="hover:text-gray-300" href="/privacy">Privacy Policy</Link>
            <span className="text-white/40">|</span>
            <Link className="hover:text-gray-300" href="/cookies">Cookies</Link>
            <span className="text-white/40">|</span>
            <Link className="hover:text-gray-300" href="/accessibility">Accessibility</Link>
          </div>
          <p className="text-right text-sm text-white">
            {new Date().getFullYear()} German University of Digital Science gGmbH — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
