import { Heading2 } from "../../../UI/headings/Heading2";
import { Section } from "../../../UI/sections/Section";

export const BadNav = () => {
  return (
    <Section>
      <Heading2>Affichage dans le navigateur</Heading2>
      <div className="mx-auto my-4 flex w-9/12 justify-around rounded-lg border border-black p-4">
        <a className="p-4" href="http://">
          Accueil
        </a>
        <a className="p-4" href="http://">
          Produits
        </a>
        <a className="p-4" href="http://">
          Services
        </a>
        <a className="p-4" href="http://">
          Contact
        </a>
      </div>
    </Section>
  );
};
