import { ButtonLink } from "~/components/UI";

export const NavPanel = () => {
  return (
    <div className="flex flex-col gap-8">
      <header>InoTest</header>

      <nav aria-label="Personas">
        <ul className="flex flex-col gap-4">
          <li>
            <ButtonLink className="w-full" href="/personas/amine">
              Amine
            </ButtonLink>
          </li>
          <li>
            <ButtonLink className="w-full" href="/personas/claire">
              Claire
            </ButtonLink>
          </li>
          <li>
            <ButtonLink className="w-full" href="/personas/djebrine">
              Djebrine
            </ButtonLink>
          </li>
          <li>
            <ButtonLink className="w-full" href="/personas/sophie">
              Sophie
            </ButtonLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
