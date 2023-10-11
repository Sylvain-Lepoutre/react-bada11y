import { Heading2 } from "../../UI/headings/Heading2";
import { Paragraph } from "../../UI/paragraph/Paragraph";
import { Section } from "../../UI/sections/Section";

export const BadTableNoAttributeConclusion = () => {
  return (
    <Section>
      <Heading2>Conclusion</Heading2>
      <Paragraph>
        Nous allons voir dans la partie suivante comment l’utilisation de
        balises sémantiques supplémentaires, ainsi que des attributs html va
        permettre de rendre notre tableau accessible pour les utilisateurs de
        lecteur d’écran.
      </Paragraph>
    </Section>
  );
};
