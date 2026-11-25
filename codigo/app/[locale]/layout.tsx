import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import { notFound } from "next/navigation";
import { artistName, images } from "@/lib/content";
import { getDictionary, isLocale, locales } from "@/lib/i18n";
import { defaultLocale } from "@/lib/locale";
import { siteUrl } from "@/lib/site";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-baskerville",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta, hero } = getDictionary(locale);
  const { title, description } = meta;
  const image = { url: images.og, width: 1200, height: 630, alt: hero.alt };
  return {
    metadataBase: siteUrl,
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...Object.fromEntries(locales.map((code) => [code, `/${code}`])),
        "x-default": `/${defaultLocale}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: artistName,
      url: `/${locale}`,
      locale: meta.ogLocale,
      title,
      description,
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale} data-scroll-behavior="smooth" className={`${inter.variable} ${baskerville.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
