import { useId } from "react";
import { Heading2 } from "../../../UI/headings/Heading2";
import { Section } from "../../../UI/sections/Section";

export const BadNav = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Affichage dans le navigateur</Heading2>
      <div className="mx-auto my-4 flex w-9/12 justify-around rounded-lg border border-black p-4">
        <a className="p-4" href="/">
          Accueil
        </a>
        <a className="p-4" href="/produits">
          Produits
        </a>
        <a className="p-4" href="/services">
          Services
        </a>
        <a className="p-4" href="/contact">
          Contact
        </a>
      </div>
    </Section>
  );
};
