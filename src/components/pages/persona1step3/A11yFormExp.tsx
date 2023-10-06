import { Heading2 } from "../../UI/headings/Heading2";
import { KeyBoardInput } from "../../UI/keyboard-inputs/KeyboardInput";
import { Paragraph } from "../../UI/paragraph/Paragraph";
import { Section } from "../../UI/sections/Section";
import { SrDisplay } from "../../UI/sr-display/SrDisplay";
import { HtmlTag } from "../../UI/tags/HtmlTag";

export const A11yFormExp = () => {
  return (
    <Section>
      <Heading2>Explications</Heading2>
      <SrDisplay>
        <ol>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>Nom édition obligatoire vide</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>Prénom édition obligatoire vide</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>Email édition obligatoire vide</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>Mot de Passe édition protégé obligatoire vide</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>
              Vérification du mot de Passe édition protégé obligatoire vide
            </span>
          </li>
        </ol>
      </SrDisplay>

      <Paragraph>
        Nous nous rendons compte que si l’on utilise les bonnes balise
        sémantiques et les bons attributs, les champs{" "}
        <HtmlTag tagName="input" /> deviennent accessible, l’utilisateur a
        l’information sur ce qui lui est demandé sur le champ où il se situe.
      </Paragraph>
      <Paragraph>
        De plus, avec l’attribut aria-required, l’utlisateur sait lorsqu’il est
        sur le champ de saisie, que le champ est obligatoire.
      </Paragraph>
    </Section>
  );
};
