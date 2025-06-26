import type { Locale, SiteConfig } from "@packages/shared";
import { Email } from "../components/email";
import { Header } from "../components/header";
import { Heading } from "../components/heading";
import { demoSiteConfig } from "../lib/config";

export interface TestEmailProps {
  locale: Locale;
  siteConfig: SiteConfig;
}

export const TestEmail = ({ locale, siteConfig }: TestEmailProps) => {
  const t = getTestEmailTranslations(locale);

  return (
    <Email previewText={t.previewText}>
      <Header siteConfig={siteConfig} />
      <Heading>{t.heading}</Heading>
    </Email>
  );
};

TestEmail.PreviewProps = {
  locale: "en",
  siteConfig: demoSiteConfig,
} satisfies TestEmailProps;

export default TestEmail;

const en = {
  previewText: "This is a test email",
  heading: "Test Email",
};

const tr = {
  previewText: "Bu bir test e-postasıdır",
  heading: "Test Email",
} satisfies typeof en;

export const getTestEmailTranslations = (locale: Locale) => {
  if (locale === "tr") return tr;
  return en;
};
