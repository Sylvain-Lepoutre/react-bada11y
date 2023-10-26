import { useId } from "react";

import { Heading2 } from "../../../UI/headings/Heading2";
import { Paragraph } from "../../../UI/paragraph/Paragraph";
import { Section } from "../../../UI/sections/Section";

export const BadFont = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Affichage dans le navigateur</Heading2>

      <Paragraph className="great-vibes">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
        asperiores adipisci fuga porro quia consequatur beatae quas aperiam
        repellat. Id sint magni a eum possimus voluptates quae temporibus
        repellat enim!
      </Paragraph>

      <Paragraph className="courgette">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
        asperiores adipisci fuga porro quia consequatur beatae quas aperiam
        repellat. Id sint magni a eum possimus voluptates quae temporibus
        repellat enim!
      </Paragraph>

      <Paragraph className="spectral-sc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
        asperiores adipisci fuga porro quia consequatur beatae quas aperiam
        repellat. Id sint magni a eum possimus voluptates quae temporibus
        repellat enim!
      </Paragraph>
    </Section>
  );
};
