import { useStore } from "@nanostores/react";

import { AAForm, AForm } from "~/components/Form";
import { AATable, ATable } from "~/components/Table";
import { Heading2 } from "~/components/UI";
import { levelSetting, personaSetting } from "~/helpers/settings";

import { Section } from "./Section";

export const ComponentsSection = () => {
  const $levelSetting = useStore(levelSetting);
  const $personaSetting = useStore(personaSetting);

  const hasAllSettingsSet = $levelSetting !== "" && $personaSetting !== "";

  return (
    <>
      {hasAllSettingsSet ? (
        <Section>
          <Heading2>{$personaSetting}</Heading2>

          {$levelSetting === "levelA" ? (
            <>
              <AForm /> <ATable />
            </>
          ) : (
            <>
              <AAForm /> <AATable />
            </>
          )}
        </Section>
      ) : null}
    </>
  );
};
