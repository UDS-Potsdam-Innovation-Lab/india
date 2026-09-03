import Image from "next/image";
import Link from "next/link";
import type { Program } from "@/lib/programs";
import { programImage } from "@/lib/media";

export function ProgramCard({ program }: { program: Program }) {
  const href =
    program.kind === "master" ? `/study/masters/${program.slug}` : `/study/mba/${program.slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[15px] bg-mist transition duration-300 hover:shadow-lg">
      <Link href={href} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={programImage(program.slug)}
          alt={program.title}
          fill
          sizes="(min-width: 1280px) 28vw, (min-width: 768px) 44vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#f18800]">
          {program.kind === "master" ? "Master" : "MBA"}
        </p>
        <h3 className="mt-2 font-blinker text-2xl font-semibold text-navy">{program.title}</h3>
        <p className="mt-2 text-sm text-navy/70">
          {program.years} year{program.years > 1 ? "s" : ""} · {program.ects} ECTS · {program.fees}
        </p>
        <Link href={href} className="btn-secondary mt-5">
          View programme →
        </Link>
      </div>
    </article>
  );
}
