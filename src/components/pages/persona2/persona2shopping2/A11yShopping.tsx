import { useId } from "react";

import { Heading2 } from "../../../UI/headings/Heading2";
import { Heading3 } from "../../../UI/headings/Heading3";
import { Section } from "../../../UI/sections/Section";
import { A11yShoppingItem } from "./A11yShoppingItem";

export const A11yShopping = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Affichage dans le navigateur</Heading2>
      <div>
        <Heading3>Fruits</Heading3>
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <A11yShoppingItem itemName="Pommes" />
          <A11yShoppingItem itemName="Poires" />
          <A11yShoppingItem itemName="Bananes" />
          <A11yShoppingItem itemName="Abricots" />
        </ul>
      </div>
      <div>
        <Heading3>Légumes</Heading3>
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <A11yShoppingItem itemName="Haricots Verts" />
          <A11yShoppingItem itemName="Choux" />
          <A11yShoppingItem itemName="Courgettes" />
          <A11yShoppingItem itemName="Navets" />
        </ul>
      </div>
    </Section>
  );
};
