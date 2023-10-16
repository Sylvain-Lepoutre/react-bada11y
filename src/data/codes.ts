export const codes = {
  BadFormNoSemantic: `<div>
    <div>Inscription</div>

    <div>
        <span>Nom</span>
        <input type="text">
    </div>

    <div>
        <span>Prénom</span>
        <input type="text">
    </div>

      <div>
        <span>E-mail</span>
        <input type="email">
    </div>

    <div>
        <span>Mot de passe</span>
        <input type="password">
    </div>

    <div>
        <span>Vérification du Mot de passe</span>
        <input type="password">
    </div>

    <input type="submit" value="Soumettre l'inscription">
</div>`,
  BadFormNoAttribute: `<form>
    <h2>Inscription</h2>

    <div>
        <label>Nom</label>
        <input type="text">
    </div>

    <div>
        <label>Prénom</label>
        <input type="text">
    </div>

    <div>
        <label>E-mail</label>
        <input type="email">
    </div>

    <div>
        <label>Mot de passe</label>
        <input type="password">
    </div>

    <input type="submit" value="Soumettre l'inscription">
</form>`,
  A11yForm: `<form>
    <h3>Inscription</h3>

    <div>
        <label for="name">Nom</label>
        <input id="name" type="text" aria-required="true">
    </div>

    <div>
        <label for="firstname">Prénom</label>
        <input id="firstname" type="text" aria-required="true">
    </div>

    <div>
        <label for="email">E-mail</label>
        <input id="email" type="email" aria-required="true">
    </div>

    <div>
        <label for="password">Mot de passe</label>
        <input id="password" type="password" aria-required="true">
    </div>

    <div>
        <label for="confirm">Vérification du Mot de passe</label>
        <input id="confirm" type="password" aria-required="true">
    </div>

    <button type="submit">Soumettre l’inscription</button>
</form>`,
  BadTableNoSemantic: `<div>
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
  BadTableNoAttribute: `<table>
    <caption>Evenement à venir</caption>

    <tr>
        <td>Evenement</td>
        <td>Lieu</td>
        <td>Date</td>
    </tr>

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
</table>`,
};
