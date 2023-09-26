import { h2Styles, sectionStyles } from "../../../routes/root";
import { PersonaCard } from "./PersonaCard";

import { personas } from "../../../data/personas";

export const PersonaSection = () => {
  return (
    <section className={sectionStyles}>
      <h2 className={h2Styles}>Choisissez Votre Persona de sensibilisation</h2>

      <ul className="my-8 grid gap-12 text-center sm:grid-cols-2 xl:grid-cols-4">
        {personas.map((persona) => (
          <PersonaCard
            key={persona.id}
            cardTitle={persona.cardTitle}
            imgSrc={persona.imgSrc}
            linkURL={persona.linkURL}
          />
        ))}
      </ul>
    </section>
  );
};
