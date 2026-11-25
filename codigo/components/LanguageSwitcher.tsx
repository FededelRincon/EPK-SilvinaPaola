"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { SectionId } from "@/lib/content";
import { Flag } from "./Flag";
import { Icon } from "./icons";

type Props = {
  locale: string;
  options: { code: string; name: string }[];
  label: string;
  activeSection: SectionId;
};

export function LanguageSwitcher({ locale, options, label, activeSection }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-label={`${label} (${options.find(({ code }) => code === locale)?.name ?? locale})`}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex h-11 items-center gap-1.5 px-2"
      >
        <Flag locale={locale} />
        <Icon name="chevron" className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="absolute top-full right-0 overflow-hidden rounded-photo bg-navy-deep py-1 shadow-deep">
          {options.map(({ code, name }) => (
            <li key={code}>
              <Link
                href={activeSection === "inicio" ? `/${code}` : `/${code}#${activeSection}`}
                hrefLang={code}
                lang={code}
                aria-label={name}
                title={name}
                aria-current={code === locale ? "true" : undefined}
                onClick={() => setOpen(false)}
                className={`grid h-11 w-16 place-items-center -outline-offset-4 hover:bg-navy ${code === locale ? "bg-navy" : ""}`}
              >
                <Flag locale={code} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
