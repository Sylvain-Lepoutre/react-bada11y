import { useId } from "react";

import { Heading2 } from "../../../UI/headings/Heading2";
import { Paragraph } from "../../../UI/paragraph/Paragraph";
import { Section } from "../../../UI/sections/Section";

export const BadFont = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Affichage dans le navigateur</Heading2>

      <Paragraph className="great-vibes text-5xl">liI1 oO0</Paragraph>

      <Paragraph className="courgette text-5xl">liI1 oO0</Paragraph>

      <Paragraph className="spectral-sc text-5xl">liI1 oO0</Paragraph>
    </Section>
  );
};
