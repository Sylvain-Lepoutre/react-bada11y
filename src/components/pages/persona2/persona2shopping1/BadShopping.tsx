import { Heading2 } from "../../../UI/headings/Heading2";
import { Section } from "../../../UI/sections/Section";
import { BadShoppingItem } from "./BadShoppingItem";

export const BadShopping = () => {
  return (
    <Section>
      <div className="my-12">
        <Heading2>Fruits</Heading2>
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <BadShoppingItem itemName="Pommes" />
          <BadShoppingItem itemName="Poires" />
          <BadShoppingItem itemName="Bananes" />
          <BadShoppingItem itemName="Abricots" />
        </ul>
      </div>
      <div>
        <Heading2>Légumes</Heading2>
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <BadShoppingItem itemName="Haricots Verts" />
          <BadShoppingItem itemName="Choux" />
          <BadShoppingItem itemName="Courgettes" />
          <BadShoppingItem itemName="Navets" />
        </ul>
      </div>
    </Section>
  );
};
