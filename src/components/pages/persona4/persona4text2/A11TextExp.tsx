import { useId } from "react";

import { Heading2 } from "../../../UI/headings/Heading2";
import { Paragraph } from "~/components/UI/";
import { Section } from "../../../UI/sections/Section";
import { HtmlTag } from "../../../UI/tags/HtmlTag";

export const A11yTextExp = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Explications</Heading2>

      <Paragraph>
        En hiérarchisant notre texte avec des balises <HtmlTag tagName="hX" />{" "}
        et en utilisant plusieurs paragraphes <HtmlTag tagName="p" />, on peut
        aérer notre texte en appliquant du style css sur ces balises.
      </Paragraph>

      <Paragraph>
        Ici nous avons réduit la largeur du conteneur, afin d’avoir des lignes
        moins longues à lire. Les titres sont écrits en plus gros, et sont bien
        espacés afin de bien se repérer. La hauteur de ligne a été augmenté afin
        de bien espacer les lignes e textes dans les paragraphes.
      </Paragraph>
    </Section>
  );
};
