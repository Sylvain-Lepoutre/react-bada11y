export const BadFormNoSemantic = () => {
  return (
    <div className="mx-auto my-4 w-3/4 rounded-lg bg-gray-200 p-4">
      <div className="text-center">Inscription</div>

      <div className="m-4 flex flex-col">
        <span>Nom</span>
        <input className="rounded-lg px-2" data-testid="" type="text" />
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
  );
};

export const BadFormSemantic = () => {
  return (
    <form className="mx-auto my-4 w-3/4 rounded-lg bg-gray-200 p-4">
      <h2 className="text-center">Inscription</h2>

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

      <input
        className="mx-auto block rounded-lg bg-gray-700 p-2 text-white"
        type="submit"
        value="Soumettre l'inscription"
      />
    </form>
  );
};
