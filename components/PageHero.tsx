import Image from "next/image";
import { HERO_IMAGE } from "@/lib/media";

export function PageHero({
  kicker,
  title,
  body,
  image = HERO_IMAGE,
}: {
  kicker?: string;
  title: string;
  body?: string;
  image?: string;
}) {
  return (
    <section className="bg-white">
      <div className="relative h-56 overflow-hidden md:h-72 lg:h-80">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover object-center" />
      </div>
      <div className="site-container py-10 md:py-12">
        {kicker ? <p className="section-kicker">{kicker}</p> : null}
        <h1 className="mt-2 max-w-4xl font-blinker text-3xl font-semibold text-navy md:text-5xl">{title}</h1>
        {body ? <p className="mt-3 max-w-2xl text-gray-600">{body}</p> : null}
      </div>
    </section>
  );
}
