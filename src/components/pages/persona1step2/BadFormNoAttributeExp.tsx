import { Heading2 } from "../../UI/headings/Heading2";
import { KeyBoardInput } from "../../UI/keyboard-inputs/KeyboardInput";
import { Paragraph } from "../../UI/paragraph/Paragraph";
import { Section } from "../../UI/sections/Section";
import { HtmlTag } from "../../UI/tags/HtmlTag";

export const BadFormNoAttributeExp = () => {
  return (
    <Section>
      <Heading2>Explications</Heading2>
      <div>
        <ol className="rounded-xl border border-black p-4">
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>édition vide</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>édition vide</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>édition vide</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>édition vide</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>édition vide</span>
          </li>
        </ol>
      </div>

      <Paragraph>
        Nous obtenons le même résultat pour le lecteur d’écran concernant les
        champs <HtmlTag tagName="input" />. Nous avons bien utilisé des balises{" "}
        <HtmlTag tagName="label" />, mais nous n’avons aucune indication pour
        les relier aux balises <HtmlTag tagName="input" /> leurs correspondant.
      </Paragraph>
    </Section>
  );
};
