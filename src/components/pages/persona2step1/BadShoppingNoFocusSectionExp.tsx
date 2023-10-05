import { Heading2 } from "../../UI/headings/Heading2";
import { Paragraph } from "../../UI/paragraph/Paragraph";
import { Section } from "../../UI/sections/Section";

export const BadShoppingNoFocusSectionExp = () => {
  return (
    <Section>
      <Heading2>Explications</Heading2>
      <Paragraph>
        Comme nous l’avons vu, Sophie doit utiliser son clavier pour naviguer,
        elle utilise la touche Tab pour passer de champ interactif en champ
        interactif. Le soucis dans notre cas présent, c’est qu’il y a aucune
        indication visuelle pour informer où nous nous trouvons dans notre
        parcours sur les différents produits.
      </Paragraph>
      <Paragraph>
        Tout nos champs interactifs doivent avoir un style visuel qui est
        modifié lorsque l’élément possède le focus afin que l’utilisateur sache
        toujours où il es lorsqu’il navigue au clavier, ou avec une techonologie
        d’assistance simulant l’utilisation d’un clavier.
      </Paragraph>
    </Section>
  );
};
