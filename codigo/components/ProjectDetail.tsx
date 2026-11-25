import { experiences } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n";
import { MediaLinkList } from "./MediaLinkList";
import { Photo } from "./Photo";

type Props = { experience: (typeof experiences)[number]; dict: Dictionary };

/** Contenido de la ventana que abre "Descubrir más". */
export function ProjectDetail({ experience, dict }: Props) {
  const { id, photos, records } = experience;
  const { subtitle, items } = dict.experiences[id];
  const single = photos.length === 1;
  return (
    <div className="grid items-start gap-8 pt-2 md:grid-cols-2 md:gap-10">
      <div className="grid gap-4">
        {photos.map(({ key, src }) => (
          <Photo
            key={key}
            src={src}
            alt={dict.photos[key]}
            sizes="(min-width: 768px) 460px, 90vw"
            className={single ? "aspect-4/5" : "aspect-4/3"}
            position={single ? "object-top" : ""}
            zoom
          />
        ))}
      </div>
      <div>
        {subtitle && <p className="mb-4 font-serif text-lg text-navy-deep italic">{subtitle}</p>}
        <div className="space-y-4 leading-relaxed">
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
      </div>
    </div>
  );
}
