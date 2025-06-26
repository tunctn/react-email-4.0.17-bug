import type { SiteConfig } from "@packages/shared";
import { Img, Section } from "@react-email/components";
import { BASE_URL } from "../lib/config";

export const Header = ({ siteConfig }: { siteConfig: SiteConfig }) => {
  return (
    <Section className="mt-[32px]">
      <Img src={`${BASE_URL}/static/nextshell-logo.png`} height="28" alt={siteConfig.name} />
    </Section>
  );
};
