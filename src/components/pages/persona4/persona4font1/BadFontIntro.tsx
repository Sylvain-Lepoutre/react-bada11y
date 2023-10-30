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
        lisibles, sans ornements et détails superflus. Chaque lettre doit être
        dessiné de manière à éviter la confusion entre plusieurs caractères.
      </Paragraph>

      <Paragraph>
        Il existe plusieurs tests de caractères à effectuer afin de voir si
        certaines lettres posent des problèmes de lisibilité. Nous pouvons
        tester par exemple un ’l’ minuscule, un ’i’ minuscule, un ’i’ majuscule
        et le chiffre ’1’. Nous pouvons aussi tester le ’o’ minuscule, le ’o’
        majuscule, et le chiffre ’0’
      </Paragraph>
    </Section>
  );
};
