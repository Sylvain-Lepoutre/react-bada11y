import { Paragraph } from "~/components/UI/";
import { Section } from "../../UI/sections/Section";

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
