import { $locale } from "../store";
import { messages } from "./ui";

export function translate(path: string) {
  const locale = $locale.get();

  return messages[locale.toLowerCase()][path] ?? messages.en[path] ?? path;
}
