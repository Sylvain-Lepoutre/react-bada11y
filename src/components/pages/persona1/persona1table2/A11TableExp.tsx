import { useId } from "react";
import { Heading2 } from "../../../UI/headings/Heading2";
import { KeyBoardInput } from "../../../UI/keyboard-inputs/KeyboardInput";
import { Section } from "../../../UI/sections/Section";
import { SrDisplay } from "../../../UI/sr-display/SrDisplay";

export const A11yTableExp = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Explications</Heading2>
      {/* TODO Vidéo */}
      <SrDisplay>
        <ol>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>
              tableau de 5 lignes et 3 colonnes légende Événements à venir
            </span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>ligne 1 colonne 1 Événement</span>
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
            <span>
              ligne 2 Événement colonne 1 Atelier sur l’accessibilité web
            </span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Lieu colonne 2 Centre de conférences local</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Date colonne 3 15 mars 2024</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>
              ligne 3 Événement colonne 1 Conférence sur les tendances du
              développement web
            </span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Lieu colonne 2 Bibliothèque communautaire</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Date colonne 3 5 avril 2024</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>
              ligne 4 Événement colonne 1 Formation sur les bonnes pratiques en
              matière d’accessibilité
            </span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Lieu colonne 2 Espace de coworking</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Date colonne 3 20 mai 2024</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>
              ligne 5 Événement colonne 1 Table ronde sur l’avenir du
              développement web
            </span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Lieu colonne 2 Campus universitaire</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Date colonne 3 10 juin 2024</span>
          </li>
        </ol>
      </SrDisplay>
    </Section>
  );
};

// sans scope:
//
//
//
//
//
