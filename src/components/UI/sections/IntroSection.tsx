import type { PropsWithChildren } from "react";

import { Heading2, Paragraph } from "~/components/UI";

import { Section } from "./Section";

type Props = PropsWithChildren<{
  title: string;
}>;

export const IntroSection = ({ children, title }: Props) => {
  return (
    <Section>
      <Heading2>{title}</Heading2>

      <Paragraph className="max-w-[80ch]">{children}</Paragraph>
    </Section>
  );
};
