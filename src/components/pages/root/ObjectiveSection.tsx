import { ObjectiveCard } from "./ObjectiveCard";

import { h2Styles } from "../../../routes/root";
import { sectionStyles } from "../../../routes/root";

export const ObjectiveSection = () => {
  return (
    <section className={sectionStyles}>
      <h2 className={h2Styles}>Nos objectifs</h2>

      <div className="my-8 grid gap-12 text-center lg:grid-cols-2">
        <ObjectiveCard
          cardTitle="Éduquer et sensibiliser"
          cardContent="Chacun de ces personas est conçu pour vous sensibiliser aux défis
        spécifiques auxquels sont confrontés certains utilisateurs en ligne.
        Vous découvrirez les obstacles qui limitent l’accès à l’information, à
        la communication et aux services pour de nombreuses personnes."
        />

        <ObjectiveCard
          cardTitle="Contribuez à l’inclusion numérique"
          cardContent="Notre objectif est de promouvoir l’inclusion numérique en
        sensibilisant à ces défis. Vous pouvez également trouver des
        ressources et des conseils pour améliorer l’accessibilité de votre
        propre site web et contribuer à un Internet plus inclusif."
        />

        <ObjectiveCard
          cardTitle="Changez de perspective"
          cardContent="Sur Inotest, vous pouvez passer d’un persona à une autre, ce qui vous
        permet de comprendre les défis auxquels sont confrontées différentes
        personnes en ligne."
        />

        <ObjectiveCard
          cardTitle="Rejoignez Notre communauté d’inclusion"
          cardContent="Ensemble, nous pouvons construire un web plus accessible et inclusif
        pour tous. L’inclusion numérique est un voyage collectif. Venez
        explorer le web à travers de nouvelles perspectives et contribuez à
        faire du web un espace plus accessible pour tous les internautes.
        Rejoignez-nous maintenant !"
        />
      </div>
    </section>
  );
};
