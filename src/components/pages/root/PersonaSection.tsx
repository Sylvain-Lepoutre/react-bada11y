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
          {personas.map((persona) => (
            <PersonaCard
              cardTitle={persona.cardTitle}
              imgSrc={persona.imgSrc}
              key={persona.id}
              linkURL={persona.personaHomeUrl}
            />
          ))}
        </ul>
      </nav>
    </Section>
  );
};
