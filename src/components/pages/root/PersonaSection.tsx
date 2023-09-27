import { personas } from "../../../data/personas";
import { h2Styles, sectionStyles } from "../../../routes/root";
import { PersonaCard } from "./PersonaCard";

export const PersonaSection = () => {
  return (
    <section className={sectionStyles}>
      <h2 className={h2Styles}>Choisissez Votre Persona de sensibilisation</h2>

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
    </section>
  );
};
