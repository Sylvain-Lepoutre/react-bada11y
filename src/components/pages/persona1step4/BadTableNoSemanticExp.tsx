import { Heading2 } from "../../UI/headings/Heading2";
import { KeyBoardInput } from "../../UI/keyboard-inputs/KeyboardInput";
import { Section } from "../../UI/sections/Section";
import { SrDisplay } from "../../UI/sr-display/SrDisplay";

export const BadTableNoSemanticExp = () => {
  return (
    <Section>
      <Heading2>Explications</Heading2>

      <SrDisplay>
        <ol>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Évènement</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Lieu</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Date</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Atelier sur l’accessibilité web</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Centre de conférences local</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>15 mars 2024</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Conférence sur les tendances du développement web</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Bibliothèque communautaire</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>5 avril 2024</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>
              Formation sur les bonnes pratiques en matière d’accessibilité
            </span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Espace de coworking</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>20 mai 2024</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Table ronde sur l’avenir du développement web</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Campus universitaire</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>10 juin 20244</span>
          </li>
        </ol>
      </SrDisplay>
    </Section>
  );
};
