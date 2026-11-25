import type { MediaRecord } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n";
import { Icon } from "./icons";

type Props = { records: readonly MediaRecord[]; dict: Dictionary; tone?: "light" | "dark"; as?: "h4" | "h5" };

export function MediaLinkList({ records, dict, tone = "light", as: Tag = "h5" }: Props) {
  const texts: Record<string, { title: string; detail: string }> = dict.records;
  const dark = tone === "dark";
  return (
    <div>
      <Tag className={`font-semibold ${dark ? "text-ivory" : "text-ink"}`}>{dict.common.records}</Tag>
      <ul className="mt-4 space-y-4">
        {records.map(({ id, url, title }) => (
          <li key={id} className="flex gap-3">
            <span
              className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded-full ${dark ? "bg-ivory text-navy" : "bg-navy text-ivory"}`}
            >
              <Icon name="play" className="size-3" />
            </span>
            <div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium ${dark ? "link-navy" : "link-ivory"}`}
              >
                {title ?? texts[id].title}
                <span className="sr-only"> ({dict.common.newTab})</span>
              </a>
              {texts[id].detail && (
                <p className={`mt-1 text-sm leading-relaxed ${dark ? "text-ivory/85" : ""}`}>
                  {texts[id].detail}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
