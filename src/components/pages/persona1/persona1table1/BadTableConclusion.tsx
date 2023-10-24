import { useId } from "react";
import { Heading2 } from "../../../UI/headings/Heading2";
import { Paragraph } from "../../../UI/paragraph/Paragraph";
import { Section } from "../../../UI/sections/Section";

export const BadTableConclusion = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Conclusion</Heading2>
      <Paragraph>
        En ajoutant les balises sémantiques nécessaires, nous allons voir que
        cela n’est pas forcément suffisant, des informations supplémentaires
        sont données, mais d’autres informations doivent être donner grâce à des
        attribtus HTML.
      </Paragraph>
    </Section>
  );
};
