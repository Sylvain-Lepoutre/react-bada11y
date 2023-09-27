import { Link } from "react-router-dom";

import { sectionStyles } from "./root";

type Props = { personaName: string; personaIntro: string };

export const PersonaHome = ({ personaName, personaIntro }: Props) => {
  return (
    <>
      <header
        className="mx-auto my-4 w-9/12 rounded-2xl bg-white p-4 shadow-Custom"
        role="banner"
      >
        <h1 className="text-center text-4xl">{personaName}</h1>
      </header>

      <main className="mx-auto my-12 w-11/12 ">
        <section className={sectionStyles}>
          <p>{personaIntro}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            vero? Possimus, saepe deleniti cumque fuga voluptate, esse debitis
            odit dolores provident ex fugiat repellendus! Vitae iure modi earum
            quam at. Illum soluta unde temporibus qui labore laudantium eos non
            nesciunt excepturi sequi quod tenetur, dicta fuga, minima
            repudiandae optio voluptatum cum deleniti impedit ipsam. Saepe porro
            voluptate reprehenderit ipsa. Qui.
          </p>
        </section>
        <div className="mx-auto my-16 flex w-8/12 justify-between sm:w-6/12 lg:w-4/12">
          <Link
            className="rounded-2xl bg-white p-4 shadow-CustomCard outline outline-2 outline-BluePastel hover:cursor-pointer hover:shadow-CustomCardHover hover:-outline-offset-8  focus:scale-105 focus:font-bold"
            to={"/"}
          >
            Retour
          </Link>
          <Link
            className="rounded-2xl bg-white p-4 shadow-CustomCard outline outline-2 outline-BluePastel hover:cursor-pointer hover:shadow-CustomCardHover hover:-outline-offset-8  focus:scale-105 focus:font-bold"
            to={"/"}
          >
            Commencer
          </Link>
        </div>
      </main>
    </>
  );
};
