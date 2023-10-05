import { Heading2 } from "../../UI/headings/Heading2";
import { Section } from "../../UI/sections/Section";

export const BadFormNoAttribute = () => {
  return (
    <Section>
      <Heading2>Affichage dans le navigateur</Heading2>
      <form className="mx-auto my-4 w-3/4 rounded-lg bg-gray-200 p-4">
        <h3 className="text-center">Inscription</h3>

        <div className="m-4 flex flex-col">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>Nom</label>
          <input className="rounded-lg px-2" type="text" />
        </div>

        <div className="m-4 flex flex-col">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>Prénom</label>
          <input className="rounded-lg px-2" type="text" />
        </div>

        <div className="m-4 flex flex-col">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>E-mail</label>
          <input className="rounded-lg px-2" type="email" />
        </div>

        <div className="m-4 flex flex-col">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>Mot de passe</label>
          <input className="rounded-lg px-2" type="password" />
        </div>

        <div className="m-4 flex flex-col">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>Vérification du Mot de passe</label>
          <input className="rounded-lg px-2" type="password" />
        </div>

        <input
          className="mx-auto block rounded-lg bg-gray-700 p-2 text-white"
          type="submit"
          value="Soumettre l'inscription"
        />
      </form>
    </Section>
  );
};
