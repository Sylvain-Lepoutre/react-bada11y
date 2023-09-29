import { Header } from "../components/headers/Header";
import { DivLink } from "../components/pages/personaHome/DivLink";
import { IntroSection } from "../components/pages/personaHome/IntroSection";
import { Section } from "../components/sections/Section";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type Props = { personaName: string; personaIntro: string; personaId: number };

export const PersonaHome = ({
  personaName,
  personaIntro,
  personaId,
}: Props) => {
  useDocumentTitle(`Accueil parcours ${personaName} - Inotest`);
  return (
    <>
      <Header heading={personaName} />

      <main className="mx-auto my-12 w-11/12">
        <IntroSection introContent={personaIntro} />

        <Section>
          Djebrine est en train de préparer une présentation pour ses employés,
          il navigue sur diverses pages web à la recherche d’informations.
          Soudain son flux d’informations se trouve interrompu.
        </Section>

        <DivLink
          labelLink1="Retour"
          labelLink2="Commencer"
          srLabelLink1="Revenir à la page d'accueil de Inotest"
          srLabelLink2={`Commencer le parcours de ${personaName}`}
          urlLink1="/"
          urlLink2={`/persona${personaId}/step1`}
        />
      </main>
    </>
  );
};
