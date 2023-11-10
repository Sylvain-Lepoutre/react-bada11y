export const AForm = () => {
  return (
    <div className="mx-auto my-4 w-3/4 rounded-xl bg-gray-500 p-4">
      <div className="flex flex-col text-center">
        Inscription
        <span className="text-sm">(tous les champs sont obligatoires)</span>
      </div>

      <div className="m-4 flex flex-col">
        <label htmlFor="lastname">Nom</label>
        <input
          className="rounded-lg px-2"
          data-testid="lastname"
          id="lastname"
          name="lastname"
          type="text"
        />
      </div>

      <div>
        <div className="m-4 flex flex-col">
          <label htmlFor="firstname">Prénom</label>
          <input
            className="rounded-lg px-2"
            data-testid="firstname"
            id="fisrtname"
            name="firstname"
            type="text"
          />
        </div>

        <div className="m-4 flex flex-col">
          <label htmlFor="job">Vous êtes ?</label>
          <select id="job" name="role">
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
            type="email"
          />
        </div>

        <div className="m-4 flex flex-col">
          <label htmlFor="password">Mot de passe</label>
          <input
            className="rounded-lg px-2"
            id="password"
            name="password"
            type="password"
          />
        </div>

        <input
          className="mx-auto block rounded-lg bg-gray-700 p-2 text-white"
          type="submit"
          value="Soumettre l'inscription"
        />
      </div>
    </div>
  );
};
