import { Heading2 } from "../../UI/headings/Heading2";
import { KeyBoardInput } from "../../UI/keyboard-inputs/KeyboardInput";
import { Paragraph } from "../../UI/paragraph/Paragraph";
import { Section } from "../../UI/sections/Section";
import { HtmlTag } from "../../UI/tags/HtmlTag";

export const A11yFormExp = () => {
  return (
    <Section>
      <Heading2>Explications</Heading2>
      <div>
        <ol className="rounded-xl border border-black p-4">
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>Nom édition vide</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>Prénom édition vide</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>Email édition vide</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>Mot de Passe édition protégé vide</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>Vérification du mot de Passe édition protégé vide</span>
          </li>
        </ol>
      </div>

      <Paragraph>
        Nous nous rendons compte que si l’on utilise les bonnes balise
        sémantiques et les bons attributs, les champs{" "}
        <HtmlTag tagName="input" /> deviennent accessible, l’utilisateur a
        l’information sur ce qui lui est demandé sur le champ où il se situe.
      </Paragraph>
    </Section>
  );
};
