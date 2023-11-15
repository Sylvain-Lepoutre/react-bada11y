import { useId } from "react";

import { Heading2 } from "../../../UI/headings/Heading2";
import { KeyBoardInput } from "../../../UI/keyboard-inputs/KeyboardInput";
import { Paragraph } from "~/components/UI/";
import { Section } from "../../../UI/sections/Section";
import { SrDisplay } from "../../../UI/sr-display/SrDisplay";
import { HtmlTag } from "../../../UI/tags/HtmlTag";
import { VideoDisplay } from "../../../UI/video-display/VideoDisplay";

export const BadTableExp = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Explications</Heading2>
      <Paragraph>
        L’utilisateur de lecteur d’écran va utiliser{" "}
        <KeyBoardInput keyName="↓" /> pour défiler dans les cases du tableau.
        Voici ce que va lui dire le lecteur d’écran.
      </Paragraph>
      <VideoDisplay
        trackFile="BadTableNoSemantic.vtt"
        videoFile="BadTableNoSemantic.mp4"
      />
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
            <span>10 juin 2024</span>
          </li>
        </ol>
      </SrDisplay>
      <Paragraph>
        En utilisant des balises <HtmlTag tagName="div" />, l’utilisateur de
        lecteur d’écran ne comprendra pas où il se situe dans le tableau, il ne
        sait pas à quoi correspond le texte qui lui est lu. L’utilisation de
        balises sémantiques telles que <HtmlTag tagName="table" />,{" "}
        <HtmlTag tagName="tr" />, <HtmlTag tagName="td" /> ainsi que d’autres
        que nous verrons ensuite, permet de représenter clairement le contenu
        d’un tableau.
      </Paragraph>
    </Section>
  );
};
