import { useStore } from "@nanostores/react";
import { useState, type ChangeEvent } from "react";

import { ButtonLink } from "~/components/UI";
import { personas } from "~/data/personas";
import { levelSetting, personaSetting } from "~/helpers/settings";

export const SettingsPanel = () => {
  const [conformanceLevel, setConformanceLevel] = useState("");

  const [displayLevelAInfo, setDisplayLevelAInfo] = useState(false);
  const [displayLevelAAInfo, setDisplayLevelAAInfo] = useState(false);

  const [selectedPersona, setSelectedPersona] = useState("");

  const handleChangeConformanceLevel = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setConformanceLevel(event.target.value);
    levelSetting.set(event.target.value);
  };

  const handleClickLevelAInfo = () => {
    setDisplayLevelAInfo(!displayLevelAInfo);
    setDisplayLevelAAInfo(false);
  };

  const handleClickLevelAAInfo = () => {
    setDisplayLevelAAInfo(!displayLevelAAInfo);
    setDisplayLevelAInfo(false);
  };

  const handleChangeSelectedPersona = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setSelectedPersona(event.target.value);
    personaSetting.set(event.target.value);
  };

  const $levelSetting = useStore(levelSetting);
  const $personaSetting = useStore(personaSetting);

  console.log("SettingsPanel : ", $levelSetting);
  console.log("SettingsPanel : ", $personaSetting);

  console.log("ConformanceLevel : ", conformanceLevel);
  console.log("DisplayLevelA : ", displayLevelAInfo);
  console.log("DisplayLevelAA : ", displayLevelAAInfo);
  console.log("SelectedPersona : ", selectedPersona);

  return (
    <div className="flex flex-col gap-8">
      <header>InoTest</header>

      <section>
        <h2>Niveau de conformité</h2>
        <div className="flex flex-col">
          <div className="relative">
            <input
              checked={conformanceLevel === "levelA"}
              id="levelA"
              name="conformance"
              onChange={handleChangeConformanceLevel}
              type="radio"
              value="levelA"
            />
            <label htmlFor="levelA">
              Niveau A <button onClick={handleClickLevelAInfo}>?</button>
            </label>
            {displayLevelAInfo && (
              <p className="absolute -right-64 top-0 w-64 bg-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                repudiandae nihil sunt iste quod aspernatur excepturi inventore
                voluptatum repellendus quos magni, numquam vero ipsam
                reprehenderit quisquam voluptatibus? Magnam, fuga vitae?
              </p>
            )}
          </div>

          <div className="relative">
            <input
              checked={conformanceLevel === "levelAA"}
              id="levelAA"
              name="conformance"
              onChange={handleChangeConformanceLevel}
              type="radio"
              value="levelAA"
            />
            <label htmlFor="levelAA">
              Niveau AA <button onClick={handleClickLevelAAInfo}>?</button>
            </label>
            {displayLevelAAInfo && (
              <p className="absolute -right-64 top-0 w-64 bg-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ratione excepturi praesentium fuga nemo, quasi fugit consectetur
                dolores dolorem iure nostrum quod magnam at! Aliquid vitae ex
                suscipit quae cupiditate quos.
              </p>
            )}
          </div>
        </div>

        {conformanceLevel === "levelA" && <h2>TEST niveau A</h2>}
        {conformanceLevel === "levelAA" && <h2>TEST niveau AA</h2>}
      </section>

      <section>
        <h2>Persona</h2>

        <div className="flex flex-col gap-4">
          {Object.values(personas).map((persona) => (
            <div className="flex" key={persona.id}>
              <input
                id={persona.name}
                name="personas"
                onChange={handleChangeSelectedPersona}
                type="radio"
                value={persona.name}
              />
              <label htmlFor={persona.name}>{persona.name}</label>
            </div>
          ))}
        </div>

        {selectedPersona && <p>{selectedPersona}</p>}
      </section>
    </div>
  );
};
