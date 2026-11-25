import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionDivider } from "@/components/SectionDivider";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Music } from "@/components/sections/Music";
import { Trajectory } from "@/components/sections/Trajectory";
import { artistName, navItems } from "@/lib/content";
import { getDictionary, isLocale, languageOptions } from "@/lib/i18n";

// Se regenera una vez por día para que el año del footer se mantenga al día.
export const revalidate = 86400;

export default async function Page({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <>
      <a
        href="#contenido"
        className="sr-only z-50 rounded bg-ivory px-4 py-2 text-navy focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {dict.nav.skip}
      </a>
      <Navbar
        brand={artistName}
        locale={locale}
        languages={languageOptions}
        links={navItems.map(({ id, key }) => ({ id, label: dict.nav[key] }))}
        labels={{
          nav: dict.nav.label,
          open: dict.nav.openMenu,
          close: dict.nav.closeMenu,
          language: dict.nav.language,
        }}
      />
      <main id="contenido" tabIndex={-1} className="outline-none">
        <Hero dict={dict} />
        <About dict={dict} />
        <SectionDivider />
        <Trajectory dict={dict} />
        <SectionDivider fade />
        <Music dict={dict} />
        <Contact dict={dict} />
      </main>
      <SectionDivider fade />
      <Footer dict={dict} />
    </>
  );
}
