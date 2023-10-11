import { BadTableNoSemantic } from "../components/pages/persona1step4/BadTableNoSemantic";
import { BadTableNoSemanticCode } from "../components/pages/persona1step4/BadTableNoSemanticCode";
import { BadTableNoSemanticExp } from "../components/pages/persona1step4/BadTableNoSemanticExp";
import { DivLink } from "../components/pages/personaHome/DivLink";
import { Header } from "../components/UI/headers/Header";
import { Main } from "../components/UI/main/Main";

type Props = {
  personaName: string;
  personaStep4Title: string;
  personaId: number;
};

export const PersonaStep4 = ({
  personaName,
  personaStep4Title,
  personaId,
}: Props) => {
  return (
    <>
      <Header heading={personaName} textContent={personaStep4Title} />

      <Main>
        {personaName === "Djebrine" && (
          <>
            <BadTableNoSemantic />
            <BadTableNoSemanticCode />
            <BadTableNoSemanticExp />
          </>
        )}

        <DivLink
          labelLink1="Accueil"
          labelLink2="Continuer"
          srLabelLink1="Revenir à la page d'accueil de Inotest"
          srLabelLink2={`Continuer le parcours de ${personaName}`}
          urlLink1="/"
          urlLink2={`/persona${personaId}/step5`}
        />
      </Main>
    </>
  );
};
