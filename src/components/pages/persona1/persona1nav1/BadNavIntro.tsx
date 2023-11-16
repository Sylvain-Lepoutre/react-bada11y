import { useId } from "react";

import { Paragraph } from "~/components/UI/";

import { Heading2 } from "../../../UI/headings/Heading2";
import { Section } from "../../../UI/sections/Section";

export const BadNavIntro = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Introduction</Heading2>
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
