import { Heading2, Paragraph } from "~/components/UI";

import { Section } from "./Section";

export const IntroSection = () => {
  return (
    <Section>
      <Heading2>Titre de la section</Heading2>

      <Paragraph className="max-w-[80ch]">
        Bienvenue sur Inotest, le site où nous vous invitons à explorer le web
        sous un nouvel angle, en partageant l’expérience de ceux qui font face à
        des défis d’accessibilité en ligne. Notre mission est de sensibiliser à
        l’importance de l’inclusion numérique en offrant une expérience unique à
        travers quatre personas, chacun représentant un type de handicap pour
        lequel le web n’est pas toujours adapté.
      </Paragraph>
    </Section>
  );
};
