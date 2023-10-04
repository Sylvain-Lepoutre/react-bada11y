export const codes = {
  BadFormNoSemantic: `<div>
    <div>Inscription</div>

    <div>
        <span>Nom</span>
        <input type="text" />
    </div>

    <div>
        <span>Prénom</span>
        <input type="text" />
    </div>

      <div>
        <span>E-mail</span>
        <input type="email" />
    </div>

    <div>
        <span>Mot de passe</span>
        <input type="password" />
    </div>

    <div>
        <span>Vérification du Mot de passe</span>
        <input type="password" />
    </div>

    <input type="submit" value="Soumettre l'inscription" />
</div>`,
  BadFormNoAttribute: `<form>
    <h2>Inscription</h2>

    <div>
        <label>Nom</label>
        <input type="text" />
    </div>

    <div>
        <label>Prénom</label>
        <input type="text" />
    </div>

    <div>
        <label>E-mail</label>
        <input type="email" />
    </div>

    <div>
        <label>Mot de passe</label>
        <input type="password" />
    </div>

    <input type="submit" value="Soumettre l'inscription" />
</form>`,
};
