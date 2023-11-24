import { useStore } from "@nanostores/react";

import { AAForm, AForm } from "~/components/Form";
import { AATable, ATable } from "~/components/Table";
import { levelSetting, personaSetting } from "~/helpers/settings";

import { Section } from "./Section";

export const ComponentsSection = () => {
  const $levelSetting = useStore(levelSetting);
  const $personaSetting = useStore(personaSetting);

  const hasAllSettingsSet = $levelSetting !== "" && $personaSetting !== "";

  const levelADjebrine =
    $levelSetting === "levelA" && $personaSetting === "Djebrine";

  const levelAADjebrine =
    $levelSetting === "levelAA" && $personaSetting === "Djebrine";

  return (
    <>
      {hasAllSettingsSet ? (
        <Section>
          {levelADjebrine ? (
            <>
              <AForm /> <ATable />
            </>
          ) : null}

          {levelAADjebrine ? (
            <>
              <AAForm /> <AATable />
            </>
          ) : null}
        </Section>
      ) : null}
    </>
  );
};
