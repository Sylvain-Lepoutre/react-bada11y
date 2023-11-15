import { Heading2 } from "../../../UI/headings/Heading2";
import { Paragraph } from "~/components/UI/";
import { Section } from "../../../UI/sections/Section";

export const BadFontExp = () => {
  return (
    <Section>
      <Heading2>Explications</Heading2>

      <Paragraph>
        Nous voyons sur les polices de caractères tester quelques soucis de
        lisibilité. Sur la première, les lettres semblent bien différencier,
        mais pas forcément lisible en soit, notamment le ’i’ majuscule.
      </Paragraph>

      <Paragraph>
        Pour la deuxième police, le ’i’ majuscule et le chiffre ’1’ peuvent
        porter à confusion, de même que le ’o’ majuscule et le chiffre ’0’
      </Paragraph>

      <Paragraph>
        Pour la troisème, le ’i’ minuscule, le ’i’ majuscule et le chiffre ’1’
        sont quasiment indentique, juste une légere différence de tailles entre
        les caractères. Pour les ’o’ et le chiffre ’0’, nous avons le même
        soucis, il est très difficile de les différencier.
      </Paragraph>
    </Section>
  );
};
