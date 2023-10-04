import { Header } from "../components/headers/Header";
import { Main } from "../components/main/Main";
import { DivLink } from "../components/pages/personaHome/DivLink";
import { IntroSection } from "../components/pages/personaHome/IntroSection";
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

      <Main>
        <IntroSection introContent={personaIntro} />

        <DivLink
          labelLink1="Retour"
          labelLink2="Commencer"
          srLabelLink1="Revenir à la page d'accueil de Inotest"
          srLabelLink2={`Commencer le parcours de ${personaName}`}
          urlLink1="/"
          urlLink2={`/persona${personaId}/step1`}
        />
      </Main>
    </>
  );
};
