import { Paragraph } from "../../paragraph/Paragraph";
import { Section } from "../../sections/Section";

type Props = {
  introContent: string;
};

export const IntroSection = ({ introContent }: Props) => {
  return (
    <Section>
      <Paragraph>{introContent}</Paragraph>
    </Section>
  );
};
