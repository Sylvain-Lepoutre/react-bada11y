import { personas } from "../../../data/personas";
import { Heading2 } from "../../UI/headings/Heading2";
import { Section } from "../../UI/sections/Section";
import { PersonaCard } from "./PersonaCard";

export const PersonaSection = () => {
  return (
    <Section>
      <Heading2> Choisissez Votre Persona de sensibilisation</Heading2>

      <ul className="my-8 grid gap-12 text-center md:grid-cols-2 lg:my-12  ">
        {personas.map((persona) => (
          <PersonaCard
            cardTitle={persona.cardTitle}
            imgSrc={persona.imgSrc}
            key={persona.id}
            linkURL={persona.linkURL}
          />
        ))}
      </ul>
    </Section>
  );
};
