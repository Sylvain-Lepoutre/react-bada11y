import { useStore } from "@nanostores/react";
import { useRef, type ChangeEventHandler } from "react";

import { Dialog, type DialogHandle } from "~/components/UI";
import { personas } from "~/data/personas";
import { levelSetting, personaSetting } from "~/helpers/settings";

export const SettingsPanel = () => {
  const $levelSetting = useStore(levelSetting);
  const $personaSetting = useStore(personaSetting);

  const handleChangeConformanceLevel: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    levelSetting.set(event.target.value);
  };

  const handleChangeSelectedPersona: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    personaSetting.set(event.target.value);
  };

  const dialogARef = useRef<DialogHandle>(null);
  const dialogAARef = useRef<DialogHandle>(null);

  return (
    <div className="flex flex-col gap-8">
      <header>InoTest</header>

      <section>
        <h2>Niveau de conformité</h2>
        <div className="flex flex-col">
          <div className="relative">
            <input
              checked={$levelSetting === "levelA"}
              id="levelA"
              name="conformance"
              onChange={handleChangeConformanceLevel}
              type="radio"
              value="levelA"
            />
            <label htmlFor="levelA">
              Niveau A{" "}
              <button onClick={() => dialogARef.current?.open()} type="button">
                ?
              </button>
            </label>

            <Dialog className="w-64 bg-gray-500" ref={dialogARef}>
              <h1>Niveau de conformité A</h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi beatae cum, culpa architecto itaque, possimus unde ex,
                exercitationem vel in quo illum ducimus nobis tenetur earum
                dignissimos odit? Molestiae, ducimus!
              </p>

              <button onClick={() => dialogARef.current?.close()} type="button">
                Fermer
              </button>
            </Dialog>
          </div>

          <div className="relative">
            <input
              checked={$levelSetting === "levelAA"}
              id="levelAA"
              name="conformance"
              onChange={handleChangeConformanceLevel}
              type="radio"
              value="levelAA"
            />
            <label htmlFor="levelAA">
              Niveau AA{" "}
              <button onClick={() => dialogAARef.current?.open()} type="button">
                ?
              </button>
            </label>

            <Dialog className="w-64 bg-gray-500" ref={dialogAARef}>
              <h1>Niveau de conformité AA</h1>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ratione excepturi praesentium fuga nemo, quasi fugit consectetur
                dolores dolorem iure nostrum quod magnam at! Aliquid vitae ex
                suscipit quae cupiditate quos.
              </p>

              <button
                onClick={() => dialogAARef.current?.close()}
                type="button"
              >
                Fermer
              </button>
            </Dialog>
          </div>
        </div>

        {$levelSetting === "levelA" && <p>TEST niveau A</p>}
        {$levelSetting === "levelAA" && <p>TEST niveau AA</p>}
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

        {$personaSetting !== "" && <p>TEST {$personaSetting}</p>}
      </section>
    </div>
  );
};
