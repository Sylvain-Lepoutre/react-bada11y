import { HeaderRoot } from "../components/pages/root/HeaderRoot";
import { IntroSection } from "../components/pages/root/IntroSection";
import { ObjectiveSection } from "../components/pages/root/ObjectiveSection";
import { PersonaSection } from "../components/pages/root/PersonaSection";
import { Main } from "../components/UI/main/Main";
import { SkipLinks } from "../components/UI/skip-links/SkipLinks";

export const Root = () => {
  return (
    <>
      <SkipLinks />

      <HeaderRoot />

      <Main>
        <IntroSection />

        <PersonaSection />

        <ObjectiveSection />
      </Main>
    </>
  );
};
