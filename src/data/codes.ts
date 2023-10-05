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
  A11yForm: `<form>
    <h3>Inscription</h3>

    <div>
        <label for="name">Nom</label>
        <input id="name" type="text">
    </div>

    <div>
        <label for="firstname">Prénom</label>
        <input id="firstname" type="text">
    </div>

    <div>
        <label for="email">E-mail</label>
        <input id="email" type="email">
    </div>

    <div>
        <label for="password">Mot de passe</label>
        <input id="password" type="password">
    </div>

    <div>
        <label for="confirm">Vérification du Mot de passe</label>
        <input id="confirm" type="password">
    </div>

    <button type="submit">Soumettre l’inscription</button>
</form>`,
};
