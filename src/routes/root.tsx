import { Main } from "../components/UI/main/Main";
import { HeaderRoot } from "../components/pages/root/HeaderRoot";
import { IntroSection } from "../components/pages/root/IntroSection";
import { ObjectiveSection } from "../components/pages/root/ObjectiveSection";
import { PersonaSection } from "../components/pages/root/PersonaSection";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const h1Styles = "text-center text-4x";
export const h2Styles = "my-4 text-center text-2xl";
export const h3Styles = "text-center text-xl";
export const pStyles = "my-4 text-center";
export const sectionStyles = "my-10 rounded-2xl bg-white p-4 shadow-Custom";

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
