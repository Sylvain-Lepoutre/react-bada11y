import { Heading2 } from "../../../UI/headings/Heading2";
import { Paragraph } from "../../../UI/paragraph/Paragraph";
import { Section } from "../../../UI/sections/Section";

export const A11yFontExp = () => {
  return (
    <Section>
      <Heading2>Explications</Heading2>
      <Paragraph>
        Cette police différencie très bien les différents caractères, pour le
        premier test, le ’i’ minuscule a bien un point, et les autres lettres
        sont tout autant lisibles.
      </Paragraph>

      <Paragraph>
        Pour le second, on a bien des différence entre le chiffre ’0’ et les
        ’o’, notamment grâce à la barre dans le ’0’ qui permet de vraiment le
        différencier.
      </Paragraph>
    </Section>
  );
};
