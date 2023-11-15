import { IntroSection, ObjectiveSection } from "~/components/UI";

import { MainPanel } from "./MainPanel";

export const HomePanel = () => {
  return (
    <MainPanel>
      <IntroSection />
      <ObjectiveSection />
    </MainPanel>
  );
};
