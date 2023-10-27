import { IntroSection } from "../components/pages/personaHome/IntroSection";
import { StepSection } from "../components/pages/personaHome/StepSection";
import { Header } from "../components/UI/headers/Header";
import { ButtonLink } from "../components/UI/links/ButtonLink";
import { Main } from "../components/UI/main/Main";
import { SkipLinks } from "../components/UI/skip-links/SkipLinks";
import type { Step } from "../data/personas";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type Props = {
  personaName: string;
  personaIntro: string;
  personaSteps: Step[];
};

export const PersonaHome = ({
  personaName,
  personaIntro,
  personaSteps,
}: Props) => {
  useDocumentTitle(`Accueil parcours ${personaName} - Inotest`);
  console.log("personaName :", personaName);
  console.log("personaSteps :", personaSteps);

  return (
    <>
      <SkipLinks />

      <Header heading={personaName} />

      <Main>
        <IntroSection introContent={personaIntro} />

        <StepSection steps={personaSteps} />

        <div className="flex justify-center">
          <ButtonLink label="Retour à l'accueil Inotest" to="/" />
        </div>
      </Main>
    </>
  );
};
