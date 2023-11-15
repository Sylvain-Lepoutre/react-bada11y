import { useId } from "react";

import { Heading2 } from "../../../UI/headings/Heading2";
import { Paragraph } from "~/components/UI/";
import { Section } from "../../../UI/sections/Section";

export const BadTextExp = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Explications</Heading2>

      <Paragraph>
        Nous avons un paragraphe unique, avec une faible hauteur de ligne, une
        hauteur de ligne de 1 n’est pas suffisante, le texte est trop condensé.
      </Paragraph>

      <Paragraph>
        Nous pouvons aussi écrire sur une plus faible largeur, et sur plusieurs
        paragraphes, mettre des titres, afin de faciliter la lecture et la
        compréhension
      </Paragraph>
    </Section>
  );
};
