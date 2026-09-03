/**
 * Localisation scaffolding.
 *
 * No translation runtime yet — this file exists so English, Arabic and German
 * can be added later without touching component internals:
 *
 *  1. Duplicate the files in `src/content/` per locale
 *     (e.g. `src/content/home.en.ts`, `home.ar.ts`, `home.de.ts`).
 *  2. Resolve the active locale from a route param (`/$locale/...`) or a cookie.
 *  3. Set `dir` and `lang` on <html> in `src/routes/__root.tsx` from
 *     `getDirection(locale)`.
 *
 * Components already use logical CSS properties (ms-/me-, ps-/pe-, text-start,
 * inset-inline-*), so RTL layouts flip without markup changes.
 */

export const locales = ["en", "ar", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  de: "Deutsch",
};

export type Direction = "ltr" | "rtl";

export function getDirection(locale: Locale): Direction {
  return locale === "ar" ? "rtl" : "ltr";
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
