import { pStyles } from "../../../routes/root";
import { Heading2 } from "../../headings/Heading2";
import { KeyBoardInput } from "../../keyboard-inputs/KeyboardInput";
import { Section } from "../../sections/Section";
import { HtmlTag } from "../../tags/HtmlTag";

//TODO revoir pour l'affichage des commandes effectuées

export const BadFormNoSemanticSectionExp = () => {
  return (
    <Section>
      <Heading2>Explications</Heading2>
      <p className={pStyles}>
        Un utilisateur de lecteur d’écran utilise la touche{" "}
        <KeyBoardInput keyName="Tab" /> pour passer d’un champ interactif à un
        autre, voici ce que lui dit le lecteur d’écran lorsqu’il parcourt ce
        formulaire
      </p>
      <div>
        <ol className="rounded-xl border border-black p-4">
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
            <span>édition vide</span>
          </li>
          <li className="my-4">
            <KeyBoardInput keyName="Tab" />
            <span>édition vide</span>
          </li>
        </ol>
        <p className={pStyles}>
          On se rend compte qu’une personne non-voyante n’a aucune indication de
          ce qu’elle doit indiquer dans les champs du formulaires
        </p>
        <p className={pStyles}>
          Nous avons utiliser uniquement des balises html{" "}
          <HtmlTag tagName="div" /> et <HtmlTag tagName="span" />, ce qui
          n’apporte aucune sémantique et donc aucune indication sur le contenu
          de ces balises, le lecteur d’écran arrive sur les{" "}
          <HtmlTag tagName="input" /> de type text ou password, sans savoir à
          quoi ils sont rattachés
        </p>
        <p className={pStyles}>
          De plus nous n’avons pas utilisé de balise <HtmlTag tagName="form" />{" "}
          pour que l’utilisateur puisse se rendre plus rapidement au fomulaire.
        </p>
        <p className={pStyles}>
          Nous devons utiliser des balises <HtmlTag tagName="label" /> afin que
          les technologies d’assistance comprennent que le champ de saisi est
          lié au label pour indiquer quelle information doit indiquer
          l’utilisateur.
        </p>
      </div>
    </Section>
  );
};
