import { Heading2 } from "../../../UI/headings/Heading2";
import { Section } from "../../../UI/sections/Section";

export const BadFormNoSemantic = () => {
  return (
    <Section>
      <Heading2>Affichage dans le navigateur</Heading2>
      <div className="mx-auto my-4 w-3/4 rounded-xl bg-gray-200 p-4">
        <div className="text-center">Inscription</div>

        <div className="m-4 flex flex-col">
          <span>Nom</span>
          <input className="rounded-lg px-2" type="text" />
        </div>

        <div className="m-4 flex flex-col">
          <span>Prénom</span>
          <input className="rounded-lg px-2" type="text" />
        </div>

        <div className="m-4 flex flex-col">
          <span>E-mail</span>
          <input className="rounded-lg px-2" type="email" />
        </div>

        <div className="m-4 flex flex-col">
          <span>Mot de passe</span>
          <input className="rounded-lg px-2" type="password" />
        </div>

        <div className="m-4 flex flex-col">
          <span>Vérification du Mot de passe</span>
          <input className="rounded-lg px-2" type="password" />
        </div>

        <input
          className="mx-auto block rounded-lg bg-gray-700 p-2 text-white"
          type="submit"
          value="Soumettre l'inscription"
        />
      </div>
    </Section>
  );
};
