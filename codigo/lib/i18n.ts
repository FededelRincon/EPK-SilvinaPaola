import en from "@/dictionaries/en.json";
import es from "@/dictionaries/es.json";
import it from "@/dictionaries/it.json";
import pt from "@/dictionaries/pt.json";

/** Todos los diccionarios deben tener la misma forma que el español. */
export type Dictionary = typeof es;

/** Para sumar un idioma: importar su JSON y agregarlo acá. */
const dictionaries = { es, en, it, pt } satisfies Record<string, Dictionary>;

export type Locale = keyof typeof dictionaries;

export const locales = Object.keys(dictionaries) as Locale[];

export function isLocale(value: string): value is Locale {
  return value in dictionaries;
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export const languageOptions = locales.map((code) => ({
  code,
  name: dictionaries[code].meta.languageName,
}));
