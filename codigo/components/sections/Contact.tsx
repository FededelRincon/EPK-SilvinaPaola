import { images, links } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n";
import { ContactItem } from "../ContactItem";
import { CopyButton } from "../CopyButton";
import { Icon } from "../icons";
import { Photo } from "../Photo";
import { Reveal } from "../Reveal";
import { SectionTitle } from "../SectionTitle";

export function Contact({ dict }: { dict: Dictionary }) {
  const t = dict.contact;
  const p = dict.projection;
  const newTab = dict.common.newTab;
  return (
    <>
      <section id="proyeccion" className="bg-ivory">
        <div className="mx-auto grid max-w-page items-center gap-12 px-6 py-20 md:grid-cols-[2fr_3fr] md:py-28 md:gap-16">
          <Reveal>
            <Photo
              src={images.projection}
              alt={p.alt}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="mx-auto aspect-2/3 max-w-sm"
              zoom
            />
          </Reveal>
          <div>
            <SectionTitle title={p.title} phrase={p.phrase} />
            <div className="mt-8 space-y-5 leading-relaxed">
              {p.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} index={index}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-ivory">
        <div aria-hidden="true" className="mx-auto max-w-page px-6">
          <div className="h-px bg-sky/60" />
        </div>
        <div className="mx-auto grid max-w-page items-center gap-12 px-6 py-20 md:grid-cols-[3fr_2fr] md:gap-16 md:py-28">
          <div>
            <SectionTitle title={t.title} phrase={t.phrase} />
            <Reveal index={1}>
              <ul className="mt-10 space-y-6">
                <ContactItem
                  icon="mail"
                  label={t.email}
                  value={links.email}
                  href={`mailto:${links.email}`}
                  newTab={newTab}
                >
                  <CopyButton
                    value={links.email}
                    labels={{
                      copy: t.copy,
                      copied: t.copied,
                      error: t.copyError,
                    }}
                  />
                </ContactItem>
                <ContactItem
                  icon="instagram"
                  label={t.instagram}
                  value={links.instagramHandle}
                  href={links.instagram}
                  external
                  newTab={newTab}
                />
                <ContactItem
                  icon="youtube"
                  label={t.youtube}
                  value={links.youtubeHandle}
                  href={links.youtube}
                  external
                  newTab={newTab}
                />
                <ContactItem icon="location" label={t.location} value={t.place} newTab={newTab} />
              </ul>
              <a
                href={links.epk}
                download
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-navy px-7 py-3.5 text-ivory shadow-soft transition-colors hover:bg-navy-deep"
              >
                <Icon name="download" />
                {t.epk}
              </a>
            </Reveal>
          </div>
          <Reveal>
            <Photo
              src={images.contact}
              alt={t.alt}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="mx-auto aspect-2/3 max-w-sm"
              zoom
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
