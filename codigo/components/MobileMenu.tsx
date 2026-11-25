"use client";

import { useEffect, useRef } from "react";
import { Icon } from "./icons";

export type NavLink = { id: string; label: string };

type Props = {
  links: NavLink[];
  activeSection: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  labels: { open: string; close: string };
};

export function MobileMenu({ links, activeSection, open, onOpenChange, labels }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector("a")?.focus({ preventScroll: true });
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) onOpenChange(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      onOpenChange(false);
      buttonRef.current?.focus();
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onOpenChange]);

  return (
    <div ref={rootRef} className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-label={open ? labels.close : labels.open}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => onOpenChange(!open)}
        className="grid size-11 place-items-center"
      >
        <Icon name={open ? "close" : "menu"} className="size-6" />
      </button>
      <ul
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="absolute inset-x-0 top-full border-t border-sky/40 bg-navy px-6 py-4 shadow-deep"
      >
        {links.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
              onClick={() => onOpenChange(false)}
              className="block py-3 font-serif text-lg underline-offset-8 aria-[current]:underline aria-[current]:decoration-sky aria-[current]:decoration-2"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
