import { DivLink } from "../components/pages/personaHome/DivLink";
import { IntroSection } from "../components/pages/personaHome/IntroSection";
import { StepSection } from "../components/pages/personaHome/StepSection";
import { Header } from "../components/UI/headers/Header";
import { Main } from "../components/UI/main/Main";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

import type { Step } from "../data/personas";

type Props = {
  personaName: string;
  personaIntro: string;
  personaId: number;
  personaSteps: Step[];
};

export const PersonaHome = ({
  personaName,
  personaIntro,
  personaId,
  personaSteps,
}: Props) => {
  useDocumentTitle(`Accueil parcours ${personaName} - Inotest`);
  console.log("personaName :", personaName);
  console.log("personaSteps :", personaSteps);

  return (
    <>
      <Header heading={personaName} />

      <Main>
        <IntroSection introContent={personaIntro} />

        <StepSection steps={personaSteps} />
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
