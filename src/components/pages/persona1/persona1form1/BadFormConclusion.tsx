import { useId } from "react";

import { Paragraph } from "~/components/UI/";

import { Heading2 } from "../../../UI/headings/Heading2";
import { Section } from "../../../UI/sections/Section";

export const BadFormConclusion = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Conclusion</Heading2>
      <Paragraph>
        Nous allons améliorer ce formulaire en utlisant les bonnes balises
        sémantiques, ainsi que les attributs html nécéssaire afin de le rendre
        accessible.
      </Paragraph>
    </Section>
  );
};
