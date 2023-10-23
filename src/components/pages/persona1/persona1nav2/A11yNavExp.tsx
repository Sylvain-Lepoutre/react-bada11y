import { Heading2 } from "../../../UI/headings/Heading2";
import { KeyBoardInput } from "../../../UI/keyboard-inputs/KeyboardInput";
import { Section } from "../../../UI/sections/Section";
import { SrDisplay } from "../../../UI/sr-display/SrDisplay";

export const A11yNavExp = () => {
  return (
    <Section>
      <Heading2>Explications</Heading2>
      <SrDisplay>
        <ol>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>navigation région liste de 4 éléments Accueil lien</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>Produits lien</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>Services lien</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>Contact lien</span>
          </li>
        </ol>
      </SrDisplay>
    </Section>
  );
};
