import { images, links, musicRecords, songs, videoclips } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n";
import { EpPlayer } from "../EpPlayer";
import { Icon } from "../icons";
import { MediaLinkList } from "../MediaLinkList";
import { Photo } from "../Photo";
import { Reveal } from "../Reveal";
import { SectionTitle } from "../SectionTitle";
import { VideoModal } from "../VideoModal";

export function Music({ dict }: { dict: Dictionary }) {
  const t = dict.music;
  const external = { target: "_blank", rel: "noopener noreferrer" };
  const newTab = <span className="sr-only"> ({dict.common.newTab})</span>;
  return (
    <>
      <section id="musica" className="bg-navy text-ivory">
        <div className="mx-auto max-w-page px-6 pt-20 md:pt-28">
          <SectionTitle tone="dark" title={t.title} phrase={t.phrase} />

          <div className="mt-14 grid gap-12 md:grid-cols-[2fr_3fr] md:grid-rows-[auto_1fr] lg:gap-x-16">
            <Reveal>
              <Photo
                src={images.epCover}
                alt={t.epAlt}
                sizes="(min-width: 768px) 40vw, 100vw"
                className="aspect-square"
                tone="dark"
                zoom
              />
              <div className="mt-8 flex flex-col items-start gap-5">
                <a
                  href={links.playlist}
                  {...external}
                  className="inline-flex items-center gap-2 rounded-full border border-ivory bg-ivory px-6 py-3 text-sm text-navy transition-colors hover:bg-transparent hover:text-ivory"
                >
                  <Icon name="play" className="size-3.5" />
                  {t.fullEp}
                  {newTab}
                </a>
                <a href={links.photoSession} {...external} className="link-navy">
                  {t.photoSession}
                  {newTab}
                </a>
              </div>
            </Reveal>
            <Reveal index={1} className="min-w-0 md:row-span-2">
              <h3 className="font-serif text-2xl">{t.epTitle}</h3>
              <p className="mt-5 leading-relaxed text-ivory/90">{t.epText}</p>
              <div className="mt-10">
                <EpPlayer
                  songs={songs}
                  poster={images.epCover}
                  posterAlt={t.epAlt}
                  labels={{ songs: t.songs, select: t.selectSong, play: t.play }}
                />
              </div>
            </Reveal>
            <Reveal className="md:col-start-1 md:row-start-2">
              <MediaLinkList records={musicRecords} dict={dict} tone="dark" as="h4" />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="encuentros" className="bg-navy text-ivory">
        <div className="mx-auto max-w-page px-6 py-20 md:pt-24 md:pb-28">
          <SectionTitle as="h3" tone="dark" title={t.cultural} phrase={t.culturalPhrase} />
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {videoclips.map(({ id, title, photo, videoId }, index) => {
              const text = dict.videoclips[id];
              return (
                <Reveal key={id} index={index}>
                  <Photo
                    src={photo}
                    alt={text.alt}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="aspect-square"
                    tone="dark"
                    zoom
                  />
                  <h4 className="mt-6 font-serif text-xl">{title}</h4>
                  <p className="mt-1 text-xs tracking-widest uppercase">{text.language}</p>
                  <p className="mt-3 mb-6 leading-relaxed text-ivory/90">{text.description}</p>
                  <VideoModal videoId={videoId} title={title} openLabel={t.watch} closeLabel={dict.common.close} />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
