import Link from "next/link";
import { BrandMark } from "./BrandMark";

export function Cta({
  title = "Start from India. Graduate German-accredited.",
  body = "Book a Student Affairs session or begin your application for the next April or October intake.",
  primary = { href: "/apply", label: "Apply now" },
  secondary = { href: "/student-affairs", label: "Talk to Student Affairs" },
}: {
  title?: string;
  body?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden bg-mist py-16 md:py-20">
      <BrandMark className="pointer-events-none absolute -right-6 -top-4 h-36 w-36 opacity-[0.12] md:h-48 md:w-48" />
      <div className="site-container relative">
        <p className="section-kicker">Next step</p>
        <h2 className="section-title max-w-3xl">{title}</h2>
        <p className="mt-3 max-w-2xl text-gray-600">{body}</p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link href={primary.href} className="btn-cta">
            {primary.label}
          </Link>
          <Link href={secondary.href} className="btn-secondary">
            {secondary.label} →
          </Link>
        </div>
      </div>
    </section>
  );
}
