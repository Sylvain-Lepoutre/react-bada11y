import { useId } from "react";

import { Paragraph } from "~/components/UI/";

import { Heading2 } from "../../../UI/headings/Heading2";
import { KeyBoardInput } from "../../../UI/keyboard-inputs/KeyboardInput";
import { Section } from "../../../UI/sections/Section";
import { SrDisplay } from "../../../UI/sr-display/SrDisplay";
import { HtmlTag } from "../../../UI/tags/HtmlTag";
import { VideoDisplay } from "../../../UI/video-display/VideoDisplay";

//TODO revoir pour l'affichage des commandes effectuées

export const BadFormExp = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Explications</Heading2>
      <Paragraph>
        Un utilisateur de lecteur d’écran utilise la touche{" "}
        <KeyBoardInput keyName="Tab" /> pour passer d’un champ interactif à un
        autre, et la touche <KeyBoardInput keyName="↓" /> pour faire défiler le
        texte, voici ce que lui dit le lecteur d’écran lorsqu’il parcourt ce
        formulaire.
      </Paragraph>
      {/* TODO refaire la vidéo */}
      <VideoDisplay
        trackFile="BadFormNoSemantic.vtt"
        videoFile="BadFormNoSemantic.mp4"
      />
      <SrDisplay>
        <ol>
          <li className="my-4 flex items-center">
            <KeyBoardInput keyName="Tab" />
            <span>édition vide</span>
          </li>
          <li className="my-4 flex items-center">
            <KeyBoardInput keyName="Tab" />
            <span>édition vide</span>
          </li>
          <li className="my-4 flex items-center">
            <KeyBoardInput keyName="Tab" />
            <span>liste déroulante Développeur réduit</span>
          </li>
          <li className="my-4 flex items-center">
            <KeyBoardInput keyName="↓" />
            <span>étudiant</span>
          </li>
          <li className="my-4 flex items-center">
            <KeyBoardInput keyName="↓" />
            <span>autre</span>
          </li>
          <li className="my-4 flex items-center">
            <KeyBoardInput keyName="Tab" />
            <span>édition vide</span>
          </li>
          <li className="my-4 flex items-center">
            <KeyBoardInput keyName="Tab" />
            <span>édition protégé vide</span>
          </li>
        </ol>
      </SrDisplay>
      <Paragraph>
        On se rend compte qu’une personne non-voyante n’a aucune indication de
        ce qu’elle doit indiquer dans les champs du formulaires.
      </Paragraph>
      <Paragraph>
        Nous avons utiliser des balises html <HtmlTag tagName="div" /> et{" "}
        <HtmlTag tagName="span" />, ce qui n’apporte aucune sémantique et donc
        aucune indication sur le contenu de ces balises, le lecteur d’écran
        arrive sur les <HtmlTag tagName="input" /> de type text ou password,
        sans savoir à quoi ils sont rattachés.
      </Paragraph>
      <Paragraph>
        Même chose pour le menu de séléction, l’utilisateur n’a aucune idée de
        ce qui lui est demandé, il a juste les réponses possibles, mais sans
        informations sur l’intitulé du champ.
      </Paragraph>
      <Paragraph>
        De plus nous n’avons pas utilisé de balise <HtmlTag tagName="form" />{" "}
        pour que l’utilisateur puisse se rendre plus rapidement au fomulaire.
      </Paragraph>
      <Paragraph>
        Nous devons utiliser des balises <HtmlTag tagName="label" /> afin que
        les technologies d’assistance comprennent que le champ de saisi est lié
        au label pour indiquer quelle information doit indiquer l’utilisateur.
      </Paragraph>
    </Section>
  );
};
