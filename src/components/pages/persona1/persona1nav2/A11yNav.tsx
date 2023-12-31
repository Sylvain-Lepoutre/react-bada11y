import { useId } from "react";

import { Heading2 } from "../../../UI/headings/Heading2";
import { Section } from "../../../UI/sections/Section";

export const A11yNav = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Affichage dans le navigateur</Heading2>
      <nav className="mx-auto my-4 w-9/12  rounded-lg border border-black p-4">
        <ul className="mx-auto my-4 flex justify-around">
          <li>
            <a className="p-4" href="/">
              Accueil
            </a>
          </li>
          <li>
            <a className="p-4" href="/produits">
              Produits
            </a>
          </li>
          <li>
            <a className="p-4" href="/services">
              Services
            </a>
          </li>
          <li>
            <a className="p-4" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </Section>
  );
};
