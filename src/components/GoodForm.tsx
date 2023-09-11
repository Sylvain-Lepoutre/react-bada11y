/* eslint-disable react/no-unescaped-entities */

import type { MouseEventHandler } from "react";

export const GoodForm = () => {
  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    console.log("click");
  };

  return (
    <form className="mx-auto my-4 w-3/4 rounded-lg bg-gray-200 p-4">
      <h1 className="text-center">Inscription</h1>

      <div className="m-4 flex flex-col">
        <label htmlFor="name">Nom</label>
        <input className="rounded-lg px-2" id="name" type="text" />
      </div>

      <div className="m-4 flex flex-col">
        <label htmlFor="firstname">Prénom</label>
        <input className="rounded-lg px-2" id="firstname" type="text" />
      </div>

      <div className="m-4 flex flex-col">
        <label htmlFor="email">Email</label>
        <input className="rounded-lg px-2" id="email" type="email" />
      </div>

      <div className="m-4 flex flex-col">
        <label htmlFor="password">Mot de passe</label>
        <input className="rounded-lg px-2" id="password" type="password" />
      </div>

      {/* <input
        className="mx-auto block rounded-lg bg-gray-700 p-2 text-white transition duration-300 ease-in-out hover:scale-110 focus:bg-white focus:text-gray-700"
        onClick={handleSubmit}
        type="submit"
        value="Soumettre l'inscription"
      /> */}

      <button
        className="mx-auto block rounded-lg bg-gray-700 p-2 text-white transition duration-300 ease-in-out hover:scale-110 focus:bg-white focus:text-gray-700"
        onClick={handleSubmit}
        type="submit"
      >
        Soumettre l'inscription
      </button>
    </form>
  );
};