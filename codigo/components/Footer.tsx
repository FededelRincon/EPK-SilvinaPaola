import { artistName, links } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n";
import { Icon, type IconName } from "./icons";

export function Footer({ dict }: { dict: Dictionary }) {
  const items: { icon: IconName; label: string; href: string; external?: boolean; download?: boolean }[] = [
    { icon: "instagram", label: dict.contact.instagram, href: links.instagram, external: true },
    { icon: "youtube", label: dict.contact.youtube, href: links.youtube, external: true },
    { icon: "mail", label: dict.contact.email, href: `mailto:${links.email}` },
    { icon: "download", label: dict.footer.epk, href: links.epk, download: true },
  ];

  return (
    <footer className="bg-navy text-ivory">
      <div className="mx-auto max-w-page px-6 pt-12 pb-8">
        <p className="font-serif text-sm tracking-widest uppercase">{artistName}</p>
        <p className="mt-2 font-serif italic">{dict.footer.phrase}</p>
        <ul className="mt-8 flex gap-3">
          {items.map(({ icon, label, href, external, download }) => (
            <li key={icon}>
              <a
                href={href}
                download={download}
                aria-label={external ? `${label} (${dict.common.newTab})` : label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group relative grid size-11 place-items-center rounded-full border border-ivory/40 transition-colors hover:bg-ivory hover:text-navy"
              >
                <Icon name={icon} />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded bg-navy-deep px-2 py-1 text-xs whitespace-nowrap text-ivory opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap justify-between gap-x-8 gap-y-2 border-t border-sky/50 pt-6 text-sm">
          <p>{dict.contact.place}</p>
          <p>© {new Date().getFullYear()} {artistName}</p>
        </div>
      </div>
    </footer>
  );
}
