import { Header } from "../components/UI/headers/Header";
import { Main } from "../components/UI/main/Main";
import { BadFormNoAttribute } from "../components/pages/persona1step2/BadFormNoAttribute";
import { BadFormNoAttributeCode } from "../components/pages/persona1step2/BadFormNoAttributeCode";
import { BadFormNoAttributeConclusion } from "../components/pages/persona1step2/BadFormNoAttributeConclusion";
import { BadFormNoAttributeExp } from "../components/pages/persona1step2/BadFormNoAttributeExp";
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

      <Main>
        {personaName === "Djebrine" && (
          <>
            <BadFormNoAttribute />
            <BadFormNoAttributeExp />
            <BadFormNoAttributeCode />
            <BadFormNoAttributeConclusion />
          </>
        )}

        <DivLink
          labelLink1="Accueil"
          labelLink2="Continuer"
          srLabelLink1="Revenir à la page d'accueil de Inotest"
          srLabelLink2={`Continuer le parcours de ${personaName}`}
          urlLink1="/"
          urlLink2="/wip"
        />
      </Main>
    </>
  );
};
