import { useId } from "react";

import { Heading2 } from "../../../UI/headings/Heading2";
import { Paragraph } from "../../../UI/paragraph/Paragraph";
import { Section } from "../../../UI/sections/Section";

export const BadFontIntro = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Introduction</Heading2>

      <Paragraph>
        Les personnes dyslexique ont besoin d’avoir des polices de caractères
        lisibles, sans ornements, détails superflus. Chaque lettre doit être
        dessiné de manière à éviter la confusion entre plusieurs caractères.
      </Paragraph>
    </Section>
  );
};
