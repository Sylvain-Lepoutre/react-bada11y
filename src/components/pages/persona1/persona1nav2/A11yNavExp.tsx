import { useId } from "react";

import { Heading2 } from "../../../UI/headings/Heading2";
import { KeyBoardInput } from "../../../UI/keyboard-inputs/KeyboardInput";
import { Paragraph } from "~/components/UI/";
import { Section } from "../../../UI/sections/Section";
import { SrDisplay } from "../../../UI/sr-display/SrDisplay";
import { HtmlTag } from "../../../UI/tags/HtmlTag";
import { InlineCode } from "../../../UI/tags/InlineCode";

export const A11yNavExp = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Explications</Heading2>
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

      <Paragraph>
        Avec l’utilisation de la balise <HtmlTag tagName="nav" />, et de
        l’attribut ARIA, <InlineCode code='role="navigation"' />, nous indiquons
        correctement que nos lien de navigations sont dans un menu de
        navigation, et les utilsateurs de technologie d’assistance pourront se
        rendre directement à celui ci grâce aux commandes de ces outils.
      </Paragraph>

      <Paragraph>
        Nous avons aussi utlisé les balises <HtmlTag tagName="ul" /> et
        <HtmlTag tagName="li" /> afin d’indiquer que ce menu est une liste qui
        comprend 4 éléments. Cela renforce la structure de notre page afin
        d’assurer une meilleure expérience de navigation.
      </Paragraph>
    </Section>
  );
};
