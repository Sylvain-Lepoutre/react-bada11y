import { BadFormNoSemantic } from "../components/BadForm";
import { Header } from "../components/headers/Header";
import { Heading2 } from "../components/headings/Heading2";
import { DivLink } from "../components/pages/personaHome/DivLink";
import { Section } from "../components/sections/Section";
import { pStyles } from "./root";

type Props = { personaName: string };

export const Persona1Step1 = ({ personaName }: Props) => {
  return (
    <>
      <Header heading={personaName} textContent="Etape 1 : Formulaire" />
      <main className="mx-auto my-12 w-11/12">
        <Section>
          <BadFormNoSemantic />
        </Section>

        <Section>
          <Heading2>Lecteur d’écran</Heading2>
          <p className={pStyles}>
            Un utilisateur de lecteur d’écran utilise la touche Tab pour passer
            d’un champ interactif à un autre, voici ce que lui dit le lecteur
            d’écran lorsqu’il parcourt ce formulaire
          </p>
          <div className="">
            <ol className="border border-black p-4">
              <li>édition vide</li>
              <li>édition vide</li>
              <li>édition vide</li>
              <li>édition protégé vide</li>
              <li>édition protégé vide</li>
            </ol>
            <p className={pStyles}>
              On se rend compte que la personne non-voyante na aucune indication
              de ce qu’elle doit indiquer dans les champs du formulaires
            </p>
            <p className={pStyles}>
              Nous avons utiliser uniquement des balises html div et tag, ce qui
              n’apporte aucune sémantique et donc aucune indication sur le
              contenu de ces balises, le lecteur d’écran arrive sur les input de
              type text ou password, sans savoir à quoi ils sont rattachés
            </p>
            <p className="{pStyles">
              Nous devons utiliser des balises label afin que les technologies
              d’assistance comprennent que le champ de saisi est lié au label
              pour indiquer quelle information doit indiquer l’utilisateur.
            </p>
          </div>

          <DivLink
            labelLink1="Accueil"
            labelLink2="Continuer"
            srLabelLink1="Revenir à la page d'accueil de Inotest"
            srLabelLink2={`Continuer le parcours de ${personaName}`}
            urlLink1="/"
            urlLink2="/test"
          />
        </Section>
      </main>
    </>
  );
};
