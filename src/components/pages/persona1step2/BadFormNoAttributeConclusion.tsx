import { pStyles } from "../../../routes/root";
import { Heading2 } from "../../headings/Heading2";
import { Section } from "../../sections/Section";

export const BadFormNoAttributeConclusion = () => {
  return (
    <Section>
      <Heading2>Conclusion</Heading2>
      <p className={pStyles}>
        Nous allons voir dans la prochaine partie quels sont les attributs HTML
        à utiliser en plus de la sémantique pour rendre notre composant
        accssibles aux utilisateurs des technologies d’assistance
      </p>
    </Section>
  );
};
