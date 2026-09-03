import Link from "next/link";
import { SITE } from "@/lib/site";

type LogoProps = {
  href?: string | null;
  showIndia?: boolean;
  className?: string;
  variant?: "default" | "onDark";
};

export function Logo({ href = "/", showIndia = false, className = "", variant = "default" }: LogoProps) {
  const src = variant === "onDark" ? SITE.logo.srcOnDark : SITE.logo.src;
  const mark = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src={src}
        alt="German University of Digital Science"
        className="h-9 w-auto max-w-[240px] sm:h-10"
        width={SITE.logo.width}
        height={SITE.logo.height}
      />
      {showIndia && SITE.logo.showIndiaLabel ? (
        <span
          className={`hidden border-l pl-3 font-poppins text-[10px] font-semibold uppercase tracking-[0.18em] sm:inline ${
            variant === "onDark" ? "border-white/25 text-[#fd9800]" : "border-navy/15 text-[#f18800]"
          }`}
        >
          India
        </span>
      ) : null}
    </span>
  );

  if (!href) return mark;
  return (
    <Link href={href} className="inline-flex items-center" aria-label="German University of Digital Science home">
      {mark}
    </Link>
  );
}
