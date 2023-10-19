import { Heading2 } from "../../../UI/headings/Heading2";
import { Paragraph } from "../../../UI/paragraph/Paragraph";
import { Section } from "../../../UI/sections/Section";

export const BadNavIntro = () => {
  return (
    <Section>
      <Heading2>Introduction</Heading2>
      <Paragraph>
        Djebrine utilise un lecteur d’écran, les lecteurs d’écran comme les
        autres technologies d’assistance ont besoin d’une sémantique précise
        pour être vraiment efficace.
      </Paragraph>

      <Paragraph>
        En effet, il est possible par exemple de se déplacer directement à un
        menu de navigation, si celui-ci est correctement implémenté grâce à des
        balises sémantiques (ou attributs ARIA).
      </Paragraph>
    </Section>
  );
};