import Image from "next/image";
import { images } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n";
import { Reveal } from "../Reveal";
import { SectionTitle } from "../SectionTitle";

export function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="sobre-mi" className="overflow-hidden bg-ivory">
      <div className="mx-auto grid max-w-page items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-lg">
            <div aria-hidden="true" className="absolute -inset-[12%] glow-portrait" />
            <Image
              src={images.portrait}
              alt={dict.about.alt}
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="rounded-photo object-cover"
            />
          </div>
        </Reveal>
        <div className="relative">
          <SectionTitle title={dict.about.title} />
          <div className="mt-8 space-y-5 leading-relaxed">
            {dict.about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} index={index}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
