import { h2Styles, sectionStyles } from "../../../routes/root";
import { PersonaCard } from "./PersonaCard";

export const PersonaSection = () => {
  return (
    <section className={sectionStyles}>
      <h2 className={h2Styles}>Choisissez Votre Persona de sensibilisation</h2>

      <ul className="my-8 grid gap-12 text-center sm:grid-cols-2 xl:grid-cols-4">
        <PersonaCard
          cardTitle={"Djebrine, 33 ans, entrepreneur, trouble visuel"}
          imgSrc="https://placehold.co/128x128/png"
        />

        <PersonaCard
          cardTitle={"Sophie, 42 ans, comptable, trouble moteur"}
          imgSrc="https://placehold.co/128x128/png"
        />

        <PersonaCard
          cardTitle={"Amine, 23 ans, étudiant, trouble auditif"}
          imgSrc="https://placehold.co/128x128/png"
        />

        <PersonaCard
          cardTitle={"Claire, 30 ans, professeur, trouble cognitif"}
          imgSrc="https://placehold.co/128x128/png"
        />
      </ul>
    </section>
  );
};
