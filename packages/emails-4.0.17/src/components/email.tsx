import { Head, Html, Preview, Tailwind } from "@react-email/components";
import { Body } from "./body";
import { Container } from "./container";

interface EmailProps {
  children: React.ReactNode;
  previewText: string;
}

export const Email = ({ children, previewText }: EmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body>
          <Container>{children}</Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
