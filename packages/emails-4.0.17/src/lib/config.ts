import type { SiteConfig } from "@packages/shared";

export const BASE_URL = process.env["NEXT_PUBLIC_APP_URL"];

export const demoSiteConfig = {
  name: "React Email Bug",
} satisfies SiteConfig;
