"use client";

import { useEffect, useState } from "react";
import { sectionIds, type SectionId } from "@/lib/content";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu, type NavLink } from "./MobileMenu";

type Props = {
  brand: string;
  locale: string;
  languages: { code: string; name: string }[];
  links: NavLink[];
  labels: { nav: string; open: string; close: string; language: string };
};

export function Navbar({ brand, locale, languages, links, labels }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      { rootMargin: "-40% 0px -59% 0px" },
    );
    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const background = menuOpen
    ? "bg-navy shadow-deep"
    : scrolled
      ? "bg-navy/95 shadow-soft backdrop-blur-sm"
      : "bg-transparent";

  return (
    <header className={`fixed inset-x-0 top-0 z-40 h-(--nav-height) text-ivory transition-colors duration-300 ${background}`}>
      <nav aria-label={labels.nav} className="mx-auto flex h-full max-w-page items-center justify-between gap-4 px-6">
        <a href="#inicio" onClick={() => setMenuOpen(false)} className="py-2 font-serif tracking-widest whitespace-nowrap uppercase">
          {brand}
        </a>
        <div className="flex items-center gap-2 lg:gap-6">
          <ul className="hidden items-center gap-7 text-sm whitespace-nowrap lg:flex">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "location" : undefined}
                  className="border-b-2 border-transparent py-2 transition-colors hover:border-ivory/60 aria-[current]:border-sky"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher locale={locale} options={languages} label={labels.language} activeSection={active} />
          <MobileMenu
            links={links}
            activeSection={active}
            open={menuOpen}
            onOpenChange={setMenuOpen}
            labels={{ open: labels.open, close: labels.close }}
          />
        </div>
      </nav>
    </header>
  );
}
