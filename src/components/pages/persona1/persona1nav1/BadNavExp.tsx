import { useId } from "react";

import { Paragraph } from "~/components/UI/";

import { Heading2 } from "../../../UI/headings/Heading2";
import { KeyBoardInput } from "../../../UI/keyboard-inputs/KeyboardInput";
import { Section } from "../../../UI/sections/Section";
import { SrDisplay } from "../../../UI/sr-display/SrDisplay";
import { HtmlTag } from "../../../UI/tags/HtmlTag";

export const BadNavExp = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Explications</Heading2>
      <Paragraph>
        Nous voyons que notre code utilise uniquement les balises{" "}
        <HtmlTag tagName="a" /> comme balise sémantique, les liens sont donc
        bien reconnus par les technologie d’assistance. Nous allons voir ce
        qu’indique un lecteur d’écran.
      </Paragraph>

      <SrDisplay>
        <ol>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>Accueil lien</span>
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

      <Paragraph>
        Le lecteur d’écran ne lit donc que “lien” sans aucune autre informations
        sémantique.
      </Paragraph>

      <Paragraph>
        Les différentes technologie d’assistance dont le lecteur d’écran fait
        partie permettent aux utilisateur d’aller directement au menu de
        navigation, mais il faut que celui-ci soit identifié sémantiquement.
      </Paragraph>

      <Paragraph>
        De même indiqué que chaque lien est un élément faisant partie d’une
        liste peut aider les utilsateurs à mieux se situer dans le flux
        d’information.
      </Paragraph>
    </Section>
  );
};
