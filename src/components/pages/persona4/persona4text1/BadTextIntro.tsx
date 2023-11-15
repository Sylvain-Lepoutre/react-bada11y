import { useId } from "react";

import { Paragraph } from "~/components/UI/";

import { Heading2 } from "../../../UI/headings/Heading2";
import { Section } from "../../../UI/sections/Section";

export const BadTextIntro = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Introduction</Heading2>

      <Paragraph>
        La dyslexie est un trouble de la lecture et de l’écriture, le trouble
        peut se traduire par des difficultés à lire vite, ou à comprendre ce qui
        est lu. Les textes trop denses, compactes, qui manque d’aération vont
        être difficile à lire et à comprendre pour une personne dyslexique.
      </Paragraph>
    </Section>
  );
};
