import { Heading2 } from "../../../UI/headings/Heading2";
import { Paragraph } from "../../../UI/paragraph/Paragraph";
import { Section } from "../../../UI/sections/Section";
import { HtmlTag } from "../../../UI/tags/HtmlTag";

export const BadNavExp = () => {
  return (
    <Section>
      <Heading2>Explications</Heading2>
      <Paragraph>
        Nous voyons que notre code utilise uniquement les balises{" "}
        <HtmlTag tagName="a" /> comme balise sémantique, ce qui fait que les
        technologies d’assistance ne reconnaitron pas notre menu de navigation
        en tant que telle.
      </Paragraph>
      <Paragraph>
        De plus on ne pourra pas savoir qu’il s’agit d’une liste et donc
        l’utilisateur de lecteur d’écran ne saura pas de combien de liens est
        composés le menu.
      </Paragraph>
    </Section>
  );
};
