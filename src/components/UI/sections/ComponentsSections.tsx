import { useStore } from "@nanostores/react";

import { AAForm, AForm } from "~/components/Form";
import { Heading2 } from "~/components/UI";
import { levelSetting, personaSetting } from "~/helpers/settings";

import { Section } from "./Section";

export const ComponentsSection = () => {
  const $levelSetting = useStore(levelSetting);
  const $personaSetting = useStore(personaSetting);

  console.log("ComponentsSections : ", $levelSetting);
  console.log("ComponentsSections : ", $personaSetting);

  return (
    <>
      {$levelSetting && $personaSetting && (
        <Section>
          <Heading2>
            {$personaSetting}

            {$levelSetting === "levelA" ? <AForm /> : <AAForm />}
          </Heading2>
        </Section>
      )}
    </>
  );
};
