import { Heading2 } from "../../UI/headings/Heading2";
import { KeyBoardInput } from "../../UI/keyboard-inputs/KeyboardInput";
import { Paragraph } from "../../UI/paragraph/Paragraph";
import { Section } from "../../UI/sections/Section";
import { SrDisplay } from "../../UI/sr-display/SrDisplay";
import { HtmlTag } from "../../UI/tags/HtmlTag";

export const BadTableNoAttributeExp = () => {
  return (
    <Section>
      <Heading2>Explications</Heading2>
      <SrDisplay>
        <ol>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>
              tableau de 5 lignes et 3 colonnes légende Evenement à venir
            </span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>ligne 1 colonne 1 Evenement</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>colonne 2 Lieu</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>colonne 3 Date</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>ligne 2 colonne 1 Atelier sur l’accessibilité web</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>colonne 2 Centre de conférences local</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>colonne 3 15 mars 2024</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>
              ligne 3 colonne 1 Conférence sur les tendances du développement
              web
            </span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>colonne 2 Bibliothèque communautaire</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>colonne 3 5 avril 2024</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>
              ligne 4 colonne 1 Formation sur les bonnes pratiques en matière
              d’accessibilité
            </span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>colonne 2 Espace de coworking</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>colonne 3 20 mai 2024</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>
              ligne 5 colonne 1 Table ronde sur l’avenir du développement web
            </span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>colonne 2 Campus universitaire</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>colonne 3 10 juin 2024</span>
          </li>
        </ol>
      </SrDisplay>

      <Paragraph>
        Nous voyons que l’utilisation des balises <HtmlTag tagName="table" />,
        <HtmlTag tagName="tr" /> ainsi que <HtmlTag tagName="td" /> ont permis
        au lecteur d’écran de donner plus d’informations concernant la structure
        du tableau, en indiquant les lignes et les colonnes. Même si sur un
        tableau de taille plus importante, cela peut rester compliquer de savoir
        à quoi correspond la cellule en cours de lecture.
      </Paragraph>
    </Section>
  );
};
