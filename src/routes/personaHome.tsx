import { Header } from "../components/headers/Header";
import { DivLink } from "../components/pages/personaHome/DivLink";
import { Section } from "../components/sections/Section";

type Props = { personaName: string; personaIntro: string };

export const PersonaHome = ({ personaName, personaIntro }: Props) => {
  return (
    <>
      <Header heading={personaName} />

      <main className="mx-auto my-12 w-11/12 ">
        <Section>
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
        </Section>

        <DivLink
          labelLink1="Retour"
          srLabelLink1="Revenir à la page d'accueil de Inotest"
          urlLink1="/"
          labelLink2="Commencer"
          srLabelLink2={`Commencer le pacrous de ${personaName}`}
          urlLink2=""
        />
      </main>
    </>
  );
};
