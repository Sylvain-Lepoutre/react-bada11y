import { Header } from "../components/headers/Header";
import { DivLink } from "../components/pages/personaHome/DivLink";
import { IntroSection } from "../components/pages/personaHome/IntroSection";

type Props = { personaName: string; personaIntro: string };

export const PersonaHome = ({ personaName, personaIntro }: Props) => {
  return (
    <>
      <Header heading={personaName} />

      <main className="mx-auto my-12 w-11/12 ">
        <IntroSection introContent={personaIntro} />

        <DivLink
          labelLink1="Retour"
          labelLink2="Commencer"
          srLabelLink1="Revenir à la page d'accueil de Inotest"
          srLabelLink2={`Commencer le pacrous de ${personaName}`}
          urlLink1="/"
          urlLink2=""
        />
      </main>
    </>
  );
};
