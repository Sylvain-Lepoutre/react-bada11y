export const codes = {
  Persona1BadForm: `<div>
    <div>Inscription</div>

    <div>
        <span>Nom</span>
        <input name="lastname" type="text">
    </div>

    <div>
        <span>Prénom</span>
        <input name="firstname" type="text">
    </div>

    <div>
        <span>Vous êtes ?</span>
        <select name="role">
          <option value="developer">Développeur</option>
          <option value="student">Étudiant</option>
          <option value="other">Autre</option>
        </select>
    </div>

    <div>
        <span>E-mail</span>
        <input name="email" type="email">
    </div>

    <div>
        <span>Mot de passe</span>
        <input name="password" type="password">
    </div>

    <input type="submit" value="Soumettre l'inscription">
</div>`,
  Persona1A11yForm: `<form>
    <h3>Inscription</h3>

    <div>
        <label for="lastname">Nom</label>
        <input id="lastnname" name="lastname" type="text" required>
    </div>

    <div>
        <label for="firstname">Prénom</label>
        <input id="firstname" name="firstname" type="text" required>
    </div>

    <div>
        <label htmlFor="role">Vous êtes ?</label>
        <select id="role" name="role" required>
            <option value="">Choisissez votre rôle</option>
            <option value="developer">Développeur</option>
            <option value="student">Étudiant</option>
            <option value="other">Autre</option>
        </select>
    </div>

    <div>
        <label for="email">E-mail</label>
        <input id="email" name="email" type="email" required>
    </div>

    <div>
        <label for="password">Mot de passe</label>
        <input id="password" name="password" type="password" required>
    </div>

    <button type="submit">Soumettre l’inscription</button>
</form>`,
  Persona1BadTable: `<div>
    <div>
        <div>Évènement</div>
        <div>Lieu</div>
        <div>Date</div>
    </div>

    <div>
        <div>Atelier sur l’accessibilité web</div>
        <div>Centre de conférences local</div>
        <div>15 mars 2024</div>
    </div>

    <div>
        <div>Conférence sur les tendances du développement web</div>
        <div>Bibliothèque communautaire</div>
        <div>5 avril 2024</div>
    </div>

    <div>
        <div>Formation sur les bonnes pratiques en matière d’accessibilité</div>
        <div>Espace de coworking</div>
        <div>20 mai 2024</div>
    </div>

    <div>
        <div>Table ronde sur l’avenir du développement web</div>
        <div>Campus universitaire</div>
        <div>10 juin 2024</div>
    </div>
</div>`,
  Persona1A11yTable: `<table>
    <caption>Événements à venir</caption>
    <thead>
        <tr>
            <th>Événement</th>
            <th>Lieu</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Atelier sur l’accessibilité web</td>
            <td>Centre de conférences local</td>
            <td>15 mars 2024</td>
        </tr>

        <tr>
            <td>Conférence sur les tendances du développement web</td>
            <td>Bibliothèque communautaire</td>
            <td>5 avril 2024</td>
        </tr>

        <tr>
            <td>Formation sur les bonnes pratiques en matière d’accessibilité</td>
            <td>Espace de coworking</td>
            <td>20 mai 2024</td>
        </tr>

        <tr>
            <td>Table ronde sur l’avenir du développement web</td>
            <td>Campus universitaire</td>
            <td>10 juin 2024</td>
        </tr>
    </tbody>
</table>`,
  Persona1BadNav: `<div>
    <a href="/">
        Accueil
    </a>
    <a href="/produits">
        Produits
    </a>
    <a href="http://">
        Services
    </a>
    <a href="http://">
        Contact
    </a>
</div>`,
  Persona1A11yNav: `<nav role="navigation">
    <ul>
        <li>
            <a href="/">Accueil</a>
        </li>
        <li>
            <a href="/produits">Produits</a>
        </li>
        <li>
            <a href="/services">Services</a>
        </li>
        <li>
            <a href="/contact">Contact</a>
        </li>
    </ul>
</nav>`,
  Persona4BadTextHtml: `<p>
    / ... /
</p>`,
  Persona4BadTextCss: `p {
    line-height: 1;
}`,
  Persona4A11yTextHtml: `<div>
    <h3>
        / ... /
    </h3>

    <p>
        / ... /
    </p>

    <p>
        / ... /
    </p>

    <h3>
        / ... /
    </h3>

    <p>
        / ... /
    </p>

    <h3>
        / ... /
    </h3>

    <p>
        / ... /
    </p>

    <p>
        / ... /
    </p>
</div>`,
  Persona4A11yTextCSS: `div {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 2rem;
   margin-top: 1rem;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.75rem;
  }`,
};
