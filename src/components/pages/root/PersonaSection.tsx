import { useId } from "react";

import { personas } from "../../../data/personas";
import { Heading2 } from "../../UI/headings/Heading2";
import { Section } from "../../UI/sections/Section";
import { PersonaCard } from "./PersonaCard";

export const PersonaSection = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}> Choisissez Votre Persona de sensibilisation</Heading2>
      <nav>
        <ul className="my-8 grid gap-12 text-center md:grid-cols-2 lg:my-12">
          <PersonaCard
            cardTitle={personas.djebrine.cardTitle}
            imgSrc={personas.djebrine.imgSrc}
            linkURL={personas.djebrine.personaHomeUrl}
          />
          <PersonaCard
            cardTitle={personas.sophie.cardTitle}
            imgSrc={personas.sophie.imgSrc}
            linkURL={personas.sophie.personaHomeUrl}
          />
          <PersonaCard
            cardTitle={personas.amine.cardTitle}
            imgSrc={personas.amine.imgSrc}
            linkURL={personas.amine.personaHomeUrl}
          />
          <PersonaCard
            cardTitle={personas.claire.cardTitle}
            imgSrc={personas.claire.imgSrc}
            linkURL={personas.claire.personaHomeUrl}
          />
        </ul>
      </nav>
    </Section>
  );
};
