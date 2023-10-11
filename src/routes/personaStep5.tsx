import { BadTableNoAttribute } from "../components/pages/persona1step5/BadTableNoAttribute";
import { BadTableNoAttributeCode } from "../components/pages/persona1step5/BadTableNoAttributeCode";
import { DivLink } from "../components/pages/personaHome/DivLink";
import { Header } from "../components/UI/headers/Header";
import { Main } from "../components/UI/main/Main";

type Props = {
  personaName: string;
  personaStep5Title: string;
  personaId: number;
};

export const PersonaStep5 = ({
  personaName,
  personaStep5Title,
  personaId,
}: Props) => {
  return (
    <>
      <Header heading={personaName} textContent={personaStep5Title} />

      <Main>
        {personaName === "Djebrine" && (
          <>
            <BadTableNoAttribute />
            <BadTableNoAttributeCode />
          </>
        )}

        <DivLink
          labelLink1="Accueil"
          labelLink2="Continuer"
          srLabelLink1="Revenir à la page d'accueil de Inotest"
          srLabelLink2={`Continuer le parcours de ${personaName}`}
          urlLink1="/"
          urlLink2={`/wip`}
        />
      </Main>
    </>
  );
};
