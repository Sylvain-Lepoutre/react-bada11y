import { useId } from "react";
import { Heading2 } from "../../../UI/headings/Heading2";
import { Section } from "../../../UI/sections/Section";
import { BadShoppingItem } from "./BadShoppingItem";
import { Heading3 } from "../../../UI/headings/Heading3";

export const BadShopping = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Affichage dans le navigateur</Heading2>
      <div className="my-12">
        <Heading3>Fruits</Heading3>
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <BadShoppingItem imgFile="pommes.jpg" itemName="Pommes" />
          <BadShoppingItem imgFile="poires.jpg" itemName="Poires" />
          <BadShoppingItem imgFile="bananes.jpg" itemName="Bananes" />
          <BadShoppingItem imgFile="abricots.jpg" itemName="Abricots" />
        </ul>
      </div>
      <div>
        <Heading3>Légumes</Heading3>
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <BadShoppingItem
            imgFile="haricots-vert.jpg"
            itemName="Haricots Verts"
          />
          <BadShoppingItem imgFile="chou.jpg" itemName="Choux" />
          <BadShoppingItem imgFile="courgette.jpg" itemName="Courgettes" />
          <BadShoppingItem imgFile="navet.jpg " itemName="Navets" />
        </ul>
      </div>
    </Section>
  );
};
