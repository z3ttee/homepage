import { atom } from "nanostores";
import { defaultLang } from "./i18n/ui";

export const $isNavigationMenuOpen = atom(false);
export const $locale = atom(defaultLang);

export function setLocale(locale: string | null) {
  $locale.set(locale ?? defaultLang);
}
