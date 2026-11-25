import { experiences, projects } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n";
import { MediaLinkList } from "../MediaLinkList";
import { Photo } from "../Photo";
import { ProjectCard } from "../ProjectCard";
import { Reveal } from "../Reveal";
import { SectionTitle } from "../SectionTitle";

export function Trajectory({ dict }: { dict: Dictionary }) {
  const t = dict.trajectory;
  return (
    <section id="trayectoria" className="bg-ivory">
      <div className="mx-auto max-w-page px-6 py-20 md:py-28">
        <SectionTitle title={t.title} phrase={t.phrase} />

        <div className="mt-14">
          <SectionTitle as="h3" title={t.universe} />
          <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map(({ id, name, photo, href }, index) => (
              <Reveal key={id} index={index}>
                <ProjectCard name={name} photo={photo} href={href} discover={dict.common.discover} {...dict.projects[id]} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <SectionTitle as="h3" title={t.experiences} phrase={t.experiencesPhrase} />
          <div className="mt-12 space-y-20">
            {experiences.map(({ id, name, photos, records }, index) => {
              const { subtitle, items } = dict.experiences[id];
              const single = photos.length === 1;
              return (
                <article key={id} id={id} className={`grid items-center gap-10 pt-4 lg:gap-14 ${index % 2 ? "lg:grid-cols-[2fr_3fr]" : "lg:grid-cols-[3fr_2fr]"}`}>
                  <div className={`grid gap-4 ${single ? "" : "sm:grid-cols-2"} ${index % 2 ? "lg:order-2" : ""}`}>
                    {photos.map(({ key, src }, photoIndex) => (
                      <Reveal key={key} index={photoIndex}>
                        <Photo
                          src={src}
                          alt={dict.photos[key]}
                          sizes={single ? "(min-width: 448px) 448px, 100vw" : "(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"}
                          className={single ? "mx-auto aspect-4/5 max-w-md" : "aspect-4/3"}
                          position={single ? "object-top" : ""}
                          zoom
                        />
                      </Reveal>
                    ))}
                  </div>
                  <Reveal>
                    <h4 className="font-serif text-2xl text-navy">{name}</h4>
                    {subtitle && <p className="mt-1 font-serif text-navy-deep italic">{subtitle}</p>}
                    <div className="mt-5 space-y-4 leading-relaxed">
                      {items.map(({ title, text }) => (
                        <div key={title + text}>
                          {title && <p className="font-medium">{title}</p>}
                          {text && <p>{text}</p>}
                        </div>
                      ))}
                    </div>
                    <div className="mt-8">
                      <MediaLinkList records={records} dict={dict} />
                    </div>
                  </Reveal>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
