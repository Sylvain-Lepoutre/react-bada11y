import { useState, type ChangeEvent } from "react";

import { ButtonLink } from "~/components/UI";
import { personas } from "~/data/personas";

export const SettingsPanel = () => {
  const [conformanceLevel, setConformanceLevel] = useState("");

  const handleChangeConformanceLevel = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setConformanceLevel(event.target.value);
  };

  console.log(conformanceLevel);

  return (
    <div className="flex flex-col gap-8">
      <header>InoTest</header>

      <section>
        <h2>Niveau de conformité</h2>
        <div className="flex flex-col">
          <div>
            <input
              checked={conformanceLevel === "levelA"}
              id="levelA"
              name="conformance"
              onChange={handleChangeConformanceLevel}
              type="radio"
              value="levelA"
            />
            <label htmlFor="levelA">Niveau A</label>
          </div>

          <div>
            <input
              checked={conformanceLevel === "levelAA"}
              id="levelAA"
              name="conformance"
              onChange={handleChangeConformanceLevel}
              type="radio"
              value="levelAA"
            />
            <label htmlFor="levelAA">Niveau AA</label>
          </div>
        </div>

        {conformanceLevel === "levelA" && <h2>TEST niveau A</h2>}
        {conformanceLevel === "levelAA" && <h2>TEST niveau AA</h2>}
      </section>

      <section>
        <h2>Persona</h2>

        <ul className="flex flex-col gap-4">
          {Object.values(personas).map((persona) => (
            <li key={persona.id}>
              <ButtonLink className="w-full" href={persona.personaHomeUrl}>
                {persona.name}
              </ButtonLink>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
