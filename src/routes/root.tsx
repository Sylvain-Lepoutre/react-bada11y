import { HeaderRoot } from "../components/pages/root/HeaderRoot";
import { IntroSection } from "../components/pages/root/IntroSection";
import { ObjectiveSection } from "../components/pages/root/ObjectiveSection";
import { PersonaSection } from "../components/pages/root/PersonaSection";
import { Main } from "../components/UI/main/Main";

import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const Root = () => {
  useDocumentTitle("Inotest - Découvrez l'inclusion en ligne");
  return (
    <>
      <HeaderRoot />
      <Main>
        <IntroSection />

        <PersonaSection />

        <ObjectiveSection />
      </Main>
    </>
  );
};
