import { useId } from "react";

import { Paragraph } from "~/components/UI/";

import { Heading2 } from "../../../UI/headings/Heading2";
import { Section } from "../../../UI/sections/Section";

export const BadFormIntro = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Introduction</Heading2>
      <Paragraph>
        La perception de Djebrine diffère de la vision traditionnelle.
        Contrairement à une personne voyante qui peut obtenir une “vue
        d’ensemble” et identifier rapidement les titres et sous-titres soulignés
        par des éléments graphiques, Djebrine n’a pas la possibilité d’avoir une
        “écoute globale” ou un “toucher global”. Son interaction avec le
        numérique est intrinsèquement plus lente et plus méthodique, reposant
        sur l’information séquentielle transmise par le lecteur d’écran.
      </Paragraph>

      <Paragraph>
        Djebrine veut connaître les dates des prochaines conférences sur
        l’inclusion numérique et le développement web. Pour cela, il doit
        s’inscrire sur une plateforme afin d’accéder aux informations qu’il
        recherche. Vous trouverez dans la section suivante, le formulaire,
        n’oubliez pas que Djebrine utilise un lecteur d’écran pour savoir ce qui
        est affiché sur l’écran, et savoir comment interagir avec la page web
        sur laquelle il navigue.
      </Paragraph>
    </Section>
  );
};
