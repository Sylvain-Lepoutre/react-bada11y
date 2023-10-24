import { useId, type MouseEventHandler } from "react";

import { Heading2 } from "../../../UI/headings/Heading2";
import { Section } from "../../../UI/sections/Section";

export const A11yForm = () => {
  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    console.log("Formulaire envoyé");
  };

  const id = useId();
  const idForm = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Affichage dans le navigateur</Heading2>

      <form
        aria-labelledby={idForm}
        className="mx-auto my-4 rounded-lg bg-gray-200 p-4"
      >
        <h3 className="flex flex-col text-center" id={idForm}>
          Inscription
          <span className="text-sm">(tous les champs sont obligatoires)</span>
        </h3>

        <div className="m-4 flex flex-col">
          <label htmlFor="lastname">Nom</label>
          <input
            className="rounded-lg px-2"
            id="lastname"
            name="lastname"
            required
            type="text"
          />
        </div>

        <div className="m-4 flex flex-col">
          <label htmlFor="firstname">Prénom</label>
          <input
            className="rounded-lg px-2"
            id="firstname"
            name="firtsname"
            required
            type="text"
          />
        </div>

        <div className="m-4 flex flex-col">
          <label htmlFor="job">Vous êtes ?</label>
          <select id="job" name="job" required>
            <option value="">Choisissez votre rôle</option>
            <option value="developer">Développeur</option>
            <option value="student">Étudiant</option>
            <option value="other">Autre</option>
          </select>
        </div>

        <div className="m-4 flex flex-col">
          <label htmlFor="email">E-mail</label>
          <input
            className="rounded-lg px-2"
            id="email"
            name="email"
            required
            type="email"
          />
        </div>

        <div className="m-4 flex flex-col">
          <label htmlFor="password">Mot de passe</label>
          <input
            className="rounded-lg px-2"
            id="password"
            name="password"
            required
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
