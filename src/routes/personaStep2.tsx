import { Header } from "../components/headers/Header";
import { BadFormNoAttribute } from "../components/pages/persona1step2/BadFormNoAttribute";
import { BadFormNoAttributeCode } from "../components/pages/persona1step2/BadFormNoAttributeCode";
import { DivLink } from "../components/pages/personaHome/DivLink";

type Props = {
  personaName: string;
  personaStep2Title: string;
  personaId: number;
};

export const PersonaStep2 = ({ personaName, personaStep2Title }: Props) => {
  return (
    <>
      <Header heading={personaName} textContent={personaStep2Title} />

      <main className="mx-auto my-12 w-11/12">
        <BadFormNoAttribute />

        <BadFormNoAttributeCode />

        <DivLink
          labelLink1="Accueil"
          labelLink2="Continuer"
          srLabelLink1="Revenir à la page d'accueil de Inotest"
          srLabelLink2={`Continuer le parcours de ${personaName}`}
          urlLink1="/"
          urlLink2="/wip"
        />
      </main>
    </>
  );
};
