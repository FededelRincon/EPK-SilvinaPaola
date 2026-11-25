import Image from "next/image";
import { artistName, images } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n";
import { Reveal } from "../Reveal";

export function Hero({ dict }: { dict: Dictionary }) {
  const button = "rounded-full border px-6 py-3 text-sm transition-colors";
  return (
    <section id="inicio" className="overflow-hidden bg-navy text-ivory nav-offset">
      <div className="mx-auto grid max-w-page items-center gap-10 px-6 pt-4 pb-16 md:min-h-[calc(100svh-var(--nav-height))] md:grid-cols-2 md:py-8">
        <Reveal className="md:order-2">
          <div className="relative mx-auto aspect-hero w-[min(78vw,20rem)] md:w-[min(100%,calc((100svh-var(--nav-height)-4rem)*0.79))]">
            <div aria-hidden="true" className="absolute -inset-[18%] glow-hero" />
            <Image
              src={images.hero}
              alt={dict.hero.alt}
              fill
              preload
              sizes="(min-width: 768px) 45vw, 78vw"
              className="rounded-photo object-cover"
            />
          </div>
        </Reveal>
        <Reveal index={1} className="relative text-center md:text-left">
          <h1 className="font-serif text-display tracking-wide uppercase">{artistName}</h1>
          <p className="mt-5 text-xs leading-relaxed tracking-[0.18em] uppercase">{dict.hero.role}</p>
          <div aria-hidden="true" className="my-8 h-px bg-sky" />
          <p className="font-serif text-lead italic">{dict.hero.tagline}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
            <a href="#musica" className={`${button} border-ivory bg-ivory text-navy hover:bg-transparent hover:text-ivory`}>
              {dict.hero.listen}
            </a>
            <a href="#contacto" className={`${button} border-ivory/60 hover:bg-ivory hover:text-navy`}>
              {dict.hero.contact}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
