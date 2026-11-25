import type { ReactNode } from "react";
import { Icon, type IconName } from "./icons";

type Props = {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  newTab: string;
  children?: ReactNode;
};

export function ContactItem({ icon, label, value, href, external, newTab, children }: Props) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy text-ivory">
        <Icon name={icon} />
      </span>
      <div className="min-w-0">
        <p className="text-sm text-ink/75">{label}</p>
        <div className="flex flex-wrap items-center gap-x-2">
          {href ? (
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="wrap-anywhere link-ivory"
            >
              {value}
              {external && <span className="sr-only"> ({newTab})</span>}
            </a>
          ) : (
            <span>{value}</span>
          )}
          {children}
        </div>
      </div>
    </li>
  );
}
