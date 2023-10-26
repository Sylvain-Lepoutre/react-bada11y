import { DivLink } from "../components/pages/personaHome/DivLink";
import { IntroSection } from "../components/pages/personaHome/IntroSection";
import { StepSection } from "../components/pages/personaHome/StepSection";
import { Header } from "../components/UI/headers/Header";
import { ButtonLink } from "../components/UI/links/ButtonLink";
import { Main } from "../components/UI/main/Main";
import { Section } from "../components/UI/sections/Section";
import type { Step } from "../data/personas";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

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

        <div className="flex justify-center">
          <ButtonLink to="/" label="Retour à l'accueil Inotest" />
        </div>
      </Main>
    </>
  );
};
