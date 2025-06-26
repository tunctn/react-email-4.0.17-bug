import type { Locale } from "./locales";

export const getSiteConfig = (locale: Locale) => {
  if (locale === "tr") {
    return {
      name: "React Email Hatası",
    };
  }

  if (locale === "en") {
    return {
      name: "React Email Bug",
    };
  }

  throw new Error(`Unknown locale: ${locale}`);
};
export type SiteConfig = ReturnType<typeof getSiteConfig>;
