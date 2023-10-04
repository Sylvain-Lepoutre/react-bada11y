import { pStyles } from "../../../routes/root";
import { Section } from "../../sections/Section";

type Props = {
  introContent: string;
};

export const IntroSection = ({ introContent }: Props) => {
  return (
    <Section>
      <p className={pStyles}>{introContent}</p>
    </Section>
  );
};
