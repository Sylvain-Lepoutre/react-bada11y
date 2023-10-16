import type { MouseEventHandler } from "react";

import { Heading2 } from "../../../UI/headings/Heading2";
import { Section } from "../../../UI/sections/Section";

export const A11yForm = () => {
  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    console.log("Formulaire envoyé");
  };

  return (
    <Section>
      <Heading2>Affichage dans le navigateur</Heading2>
      <form className="mx-auto my-4 rounded-lg bg-gray-200 p-4">
        <h3 className="flex flex-col text-center">
          Inscription
          <span className="text-sm">(tout les champs sont obligatoires)</span>
        </h3>

        <div className="m-4 flex flex-col">
          <label htmlFor="lastname">Nom</label>
          <input
            required
            className="rounded-lg px-2"
            id="lastname"
            name="lastname"
            type="text"
          />
        </div>

        <div className="m-4 flex flex-col">
          <label htmlFor="firstname">Prénom</label>
          <input
            required
            className="rounded-lg px-2"
            id="firstname"
            name="firtsname"
            type="text"
          />
        </div>

        <div className="m-4 flex flex-col">
          <label htmlFor="email">E-mail</label>
          <input
            required
            className="rounded-lg px-2"
            id="email"
            name="email"
            type="email"
          />
        </div>

        <div className="m-4 flex flex-col">
          <label htmlFor="password">Mot de passe</label>
          <input
            required
            className="rounded-lg px-2"
            id="password"
            name="password"
            type="password"
          />
        </div>

        <button
          className="mx-auto block rounded-lg bg-gray-700 p-2 text-white transition duration-300 ease-in-out hover:scale-110 focus:bg-white focus:text-gray-700"
          onClick={handleSubmit}
          type="submit"
        >
          Soumettre l’inscription
        </button>
      </form>
    </Section>
  );
};
