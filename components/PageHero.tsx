import Image from "next/image";
import type { ReactNode } from "react";
import { HERO_IMAGE } from "@/lib/media";

export function PageHero({
  kicker,
  title,
  body,
  image = HERO_IMAGE,
}: {
  kicker?: string;
  title: string;
  body?: ReactNode;
  image?: string | null;
}) {
  return (
    <section className="bg-white">
      {image ? (
        <div className="relative h-56 overflow-hidden md:h-72 lg:h-80">
          <Image src={image} alt="" fill sizes="100vw" className="object-cover object-center" />
        </div>
      ) : null}
      <div className={`site-container ${image ? "py-10 md:py-12" : "py-14 md:py-16"}`}>
        {kicker ? <p className="section-kicker">{kicker}</p> : null}
        <h1 className="mt-2 max-w-4xl font-blinker text-3xl font-semibold text-navy md:text-5xl">{title}</h1>
        {typeof body === "string" ? (
          <p className="mt-3 max-w-2xl text-gray-600">{body}</p>
        ) : body ? (
          <div className="mt-3 max-w-2xl space-y-4 text-gray-600">{body}</div>
        ) : null}
      </div>
    </section>
  );
}
