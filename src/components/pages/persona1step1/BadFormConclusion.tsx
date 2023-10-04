import { pStyles } from "../../../routes/root";
import { Heading2 } from "../../headings/Heading2";
import { Section } from "../../sections/Section";

export const BadFormConclusion = () => {
  return (
    <Section>
      <Heading2>Conclusion</Heading2>
      <p className={pStyles}>
        Nous allons voir par la suite que même en utilisant les bonnes balises
        sémantiques, il reste possible de faire des erreurs, en oubliant des
        attributs HTML.
      </p>
    </Section>
  );
};
