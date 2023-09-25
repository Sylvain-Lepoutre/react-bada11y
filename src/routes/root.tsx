import { Link } from "react-router-dom";
import { Header } from "../components/Header";

/* eslint-disable react/no-unescaped-entities */
export const h1Styles = "text-center text-4x";
export const h2Styles = "my-4 text-center text-2xl";
export const liStyles =
  "mx-auto flex w-9/12 max-w-xs list-none flex-col justify-between rounded-2xl p-4 shadow-CustomCard transition-shadow hover:shadow-CustomCardHover";
export const pStyles = "my-10";
export const sectionStyles = "mx-auto my-4 w-11/12 rounded-2xl bg-white p-4";

export const Root = () => {
  return (
    <>
      <Header />
      <main className="mx-auto my-12 w-11/12 ">
        <header className="my-10 rounded-2xl bg-white p-4 shadow-Custom shadow-BluePastel">
          Bienvenue sur Inotest, le site où nous vous invitons à explorer le web
          sous un nouvel angle, en partageant l’expérience de ceux qui font face
          à des défis d'accessibilité en ligne. Notre mission est de
          sensibiliser à l'importance de l'inclusion numérique en offrant une
          expérience unique à travers quatre personas, chacun représentant un
          type de handicap pour lequel le web n'est pas toujours adapté.
        </header>

        <section className="my-10 rounded-2xl bg-white p-4 shadow-Custom shadow-BluePastel">
          <h2 className={h2Styles}>
            Choisissez Votre Persona de sensibilisation
          </h2>
          <p className={pStyles}>
            Sur Inotest, nous vous proposons de vivre quatre expériences de
            navigation en ligne différentes :
          </p>
          <ul className="my-8 grid gap-12 text-center sm:grid-cols-2 xl:grid-cols-4">
            <li className="mx-auto flex w-9/12 max-w-xs list-none flex-col justify-between rounded-2xl p-4 shadow-CustomCard hover:shadow-CustomCardHover">
              <h3>Djebrine, 33 ans, entrepreneur, trouble visuel</h3>
              <img
                alt=""
                className="mx-auto"
                src="https://placehold.co/128x128/png"
              />
            </li>

            <li className={liStyles}>
              Sophie, 42 ans, comptable, trouble moteur
              <img
                alt=""
                className="mx-auto"
                src="https://placehold.co/128x128/png"
              />
            </li>

            <li className={liStyles}>
              Amine, 23 ans, étudiant, trouble auditif
              <img
                alt=""
                className="mx-auto"
                src="https://placehold.co/128x128/png"
              />
            </li>

            <li className={liStyles}>
              Claire, 30 ans, professeur, trouble cognitif
              <img
                alt=""
                className="mx-auto"
                src="https://placehold.co/128x128/png"
              />
            </li>
          </ul>
        </section>

        <section className="my-10 rounded-2xl bg-white p-4 shadow-Custom shadow-BluePastel">
          <h2 className={h2Styles}>Éduquer et sensibiliser</h2>
          <p className={pStyles}>
            Chacun de ces personas est conçu pour vous sensibiliser aux défis
            spécifiques auxquels sont confrontés certains utilisateurs en ligne.
            Vous découvrirez les obstacles qui limitent l'accès à l'information,
            à la communication et aux services pour de nombreuses personnes.
          </p>
          <h2 className={h2Styles}>Contribuez à l'inclusion numérique</h2>
          <p className={pStyles}>
            Notre objectif est de promouvoir l'inclusion numérique en
            sensibilisant à ces défis. Vous pouvez également trouver des
            ressources et des conseils pour améliorer l'accessibilité de votre
            propre site web et contribuer à un Internet plus inclusif.
          </p>
          <h2 className={h2Styles}>Changez de perspective</h2>
          <p className={pStyles}>
            Sur Inotest, vous pouvez passer d'un persona à une autre, ce qui
            vous permet de comprendre les défis auxquels sont confrontées
            différentes personnes en ligne.
          </p>
          <h2 className={h2Styles}>Rejoignez Notre communauté d'inclusion</h2>
          <p className={pStyles}>
            Ensemble, nous pouvons construire un web plus accessible et inclusif
            pour tous. L'inclusion numérique est un voyage collectif. Venez
            explorer le web à travers de nouvelles perspectives et contribuez à
            faire du web un espace plus accessible pour tous les internautes.
            Rejoignez-nous maintenant !
          </p>
        </section>
      </main>
    </>
  );
};
