import { useId } from "react";

import { Heading2 } from "../../../UI/headings/Heading2";
import { Section } from "../../../UI/sections/Section";

export const BadForm = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Affichage dans le navigateur</Heading2>

      <div className="mx-auto my-4 w-3/4 rounded-xl bg-gray-200 p-4">
        <div className="flex flex-col text-center">
          Inscription
          <span className="text-sm">(tous les champs sont obligatoires)</span>
        </div>

        <div className="m-4 flex flex-col">
          <span>Nom</span>
          <input
            className="rounded-lg px-2"
            data-testid="lastname"
            name="lastname"
            type="text"
          />
        </div>

        <div className="m-4 flex flex-col">
          <span>Prénom</span>
          <input
            className="rounded-lg px-2"
            data-testid="firstname"
            name="firstname"
            type="text"
          />
        </div>

        <div className="m-4 flex flex-col">
          <span>Vous êtes ?</span>
          <select name="role">
            <option value="developer">Développeur</option>
            <option value="student">Étudiant</option>
            <option value="other">Autre</option>
          </select>
        </div>

        <div className="m-4 flex flex-col">
          <span>E-mail</span>
          <input className="rounded-lg px-2" name="email" type="email" />
        </div>

        <div className="m-4 flex flex-col">
          <span>Mot de passe</span>
          <input className="rounded-lg px-2" name="password" type="password" />
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
