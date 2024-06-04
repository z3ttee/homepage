import { atom } from "nanostores";

export const $isNavigationMenuOpen = atom(false);
export const $locale = atom("EN");

export function setLocale(locale: string | null) {
  $locale.set(locale ?? "EN");
}
