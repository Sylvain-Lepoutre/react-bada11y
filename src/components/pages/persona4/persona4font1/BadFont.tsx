import { useId } from "react";

import { Paragraph } from "~/components/UI/";

import { Heading2 } from "../../../UI/headings/Heading2";
import { Section } from "../../../UI/sections/Section";

export const BadFont = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Affichage dans le navigateur</Heading2>

      <Paragraph className="great-vibes">liI1 oO0</Paragraph>

      <Paragraph className="courgette">liI1 oO0</Paragraph>

      <Paragraph className="spectral-sc">liI1 oO0</Paragraph>
    </Section>
  );
};
