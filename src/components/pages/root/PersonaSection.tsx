import { personas } from "../../../data/personas";
import { Heading2 } from "../../headings/Heading2";
import { Section } from "../../sections/Section";
import { PersonaCard } from "./PersonaCard";

export const PersonaSection = () => {
  return (
    <Section>
      <Heading2> Choisissez Votre Persona de sensibilisation</Heading2>

      <ul className="my-8 grid gap-12 text-center sm:grid-cols-2 xl:grid-cols-4">
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
