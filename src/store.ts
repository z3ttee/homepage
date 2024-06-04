import { atom } from "nanostores";
import { defaultLang, messages } from "./i18n/ui";

export const $isNavigationMenuOpen = atom(false);
export const $locale = atom(defaultLang);

export function setLocale(locale: string | null) {
  locale = locale?.toLowerCase() ?? defaultLang;
  if (!messages[locale]) {
    locale = defaultLang;
  }

  $locale.set(locale);
}
