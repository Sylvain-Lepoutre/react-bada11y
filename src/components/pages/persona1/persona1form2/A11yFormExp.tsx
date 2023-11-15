import { useId } from "react";

import { Paragraph } from "~/components/UI/";

import { Heading2 } from "../../../UI/headings/Heading2";
import { KeyBoardInput } from "../../../UI/keyboard-inputs/KeyboardInput";
import { Section } from "../../../UI/sections/Section";
import { SrDisplay } from "../../../UI/sr-display/SrDisplay";
import { HtmlTag } from "../../../UI/tags/HtmlTag";
import { VideoDisplay } from "../../../UI/video-display/VideoDisplay";

export const A11yFormExp = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Explications</Heading2>
      {/* TODO refaire la vidéo */}
      <VideoDisplay trackFile="A11yForm.vtt" videoFile="A11yForm.mp4" />
      <SrDisplay>
        <ol>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>Nom édition obligatoire vide</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>Prénom édition obligatoire vide</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>
              Vous êtes ? liste déroulante Choisissez votre rôle réduit
              obligatoire entrée invalide
            </span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Développeur</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Étudiant</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="↓" />
            <span>Autre</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>Email édition obligatoire vide</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>Mot de Passe édition protégé obligatoire vide</span>
          </li>
        </ol>
      </SrDisplay>

      <Paragraph>
        Nous nous rendons compte que si l’on utilise les bonnes balise
        sémantiques et les bons attributs, les champs{" "}
        <HtmlTag tagName="input" /> deviennent accessible, l’utilisateur a
        l’information sur ce qui lui est demandé sur le champ où il se situe.
      </Paragraph>
      <Paragraph>
        De plus, avec l’attribut aria-required, l’utlisateur sait lorsqu’il est
        sur le champ de saisie, que le champ est obligatoire.
      </Paragraph>
    </Section>
  );
};
