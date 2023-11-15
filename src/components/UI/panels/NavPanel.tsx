import { ButtonLink } from "~/components/UI";
import { personas } from "~/data/personas";

// console.log(personas);

export const NavPanel = () => {
  console.log(Object.values(personas));

  return (
    <div className="flex flex-col gap-8">
      <header>InoTest</header>

      <nav aria-label="Personas">
        <ul className="flex flex-col gap-4">
          {Object.values(personas).map((persona) => (
            <li key={persona.id}>
              <ButtonLink className="w-full" href={persona.personaHomeUrl}>
                {persona.name}
              </ButtonLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
