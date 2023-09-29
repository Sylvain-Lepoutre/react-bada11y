import { Section } from "../../sections/Section";

type Props = {
  introContent: string;
};

export const IntroSection = ({ introContent }: Props) => {
  return (
    <Section>
      <p>{introContent}</p>
    </Section>
  );
};