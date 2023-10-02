import { Heading2 } from "../../headings/Heading2";
import { Heading3 } from "../../headings/Heading3";
import { Section } from "../../sections/Section";
import { BadShoppingItem } from "./BadShoppingItem";

export const BadShoppingNoFocusSection = () => {
  return (
    <Section>
      <div className="my-12">
        <Heading2>Fruits</Heading2>
        <ul className="grid grid-cols-4 gap-8">
          <BadShoppingItem itemName="Pommes" />
          <BadShoppingItem itemName="Poires" />
          <BadShoppingItem itemName="Bananes" />
          <BadShoppingItem itemName="Abricots" />
        </ul>
      </div>
      <div>
        <Heading2>Légumes</Heading2>
        <ul className="grid grid-cols-4 gap-8">
          <BadShoppingItem itemName="Haricots Verts" />
          <BadShoppingItem itemName="Choux" />
          <BadShoppingItem itemName="Courgettes" />
          <BadShoppingItem itemName="Navets" />
        </ul>
      </div>
    </Section>
  );
};
