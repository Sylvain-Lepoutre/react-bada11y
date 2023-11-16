import { ButtonLink } from "~/components/UI";
import { personas } from "~/data/personas";

export const SettingsPanel = () => {
  return (
    <div className="flex flex-col gap-8">
      <header>InoTest</header>

      <section>
        <h2>Niveau de conformité</h2>

        <ul>
          <li>A (?)</li>
          <li>AA (?)</li>
        </ul>
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
