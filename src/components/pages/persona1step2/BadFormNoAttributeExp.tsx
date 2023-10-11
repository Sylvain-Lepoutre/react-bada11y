import { Heading2 } from "../../UI/headings/Heading2";
import { KeyBoardInput } from "../../UI/keyboard-inputs/KeyboardInput";
import { Paragraph } from "../../UI/paragraph/Paragraph";
import { Section } from "../../UI/sections/Section";
import { SrDisplay } from "../../UI/sr-display/SrDisplay";
import { HtmlTag } from "../../UI/tags/HtmlTag";
import { VideoDisplay } from "../../UI/video-display/VideoDisplay";

export const BadFormNoAttributeExp = () => {
  return (
    <Section>
      <Heading2>Explications</Heading2>
      <VideoDisplay
        trackFile="BadFormNoAttribute.vtt"
        videoFile="BadFormNoAttribute.mp4"
      />
      <SrDisplay>
        <ol>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>édition vide</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>édition vide</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>édition vide</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>édition protégé vide</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>édition protégé vide</span>
          </li>
        </ol>
      </SrDisplay>

      <Paragraph>
        Nous obtenons le même résultat pour le lecteur d’écran concernant les
        champs <HtmlTag tagName="input" />. Nous avons bien utilisé des balises{" "}
        <HtmlTag tagName="label" />, mais nous n’avons aucune indication pour
        les relier aux balises <HtmlTag tagName="input" /> leurs correspondant.
      </Paragraph>
    </Section>
  );
};
