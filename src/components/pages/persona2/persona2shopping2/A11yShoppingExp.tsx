import { useId } from "react";

import { Heading2 } from "../../../UI/headings/Heading2";
import { Paragraph } from "~/components/UI/";
import { Section } from "../../../UI/sections/Section";

export const A11yShoppingExp = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Explications</Heading2>
      <Paragraph>
        Avec l’utilisation d’un focus visible, nous nous rendons compte que lors
        d’une navigation clavier, nous savons bien sur quels éléments
        interactifs nous nous situons dans notre navigation sur la page.
      </Paragraph>
    </Section>
  );
};
