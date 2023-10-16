import { BadFormNoSemantic } from "../components/pages/persona1/persona1form1/BadFormNoSemantic";
import { BadFormNoSemanticCode } from "../components/pages/persona1/persona1form1/BadFormNoSemanticCode";
import { BadFormNoSemanticConclusion } from "../components/pages/persona1/persona1form1/BadFormNoSemanticConclusion";
import { BadFormNoSemanticExp } from "../components/pages/persona1/persona1form1/BadFormNoSemanticExp";
import { BadFormNoSemanticIntro } from "../components/pages/persona1/persona1form1/BadFormNoSemanticIntro";
import { BadShoppingNoFocus } from "../components/pages/persona2step1/BadShoppingNoFocus";
import { BadShoppingNoFocusExp } from "../components/pages/persona2step1/BadShoppingNoFocusExp";
import { DivLink } from "../components/pages/personaHome/DivLink";
import { Header } from "../components/UI/headers/Header";
import { Main } from "../components/UI/main/Main";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type Props = {
  personaName: string;
  personaStep1Title: string;
  personaId: number;
};

export const PersonaStep1 = ({
  personaName,
  personaStep1Title,
  personaId,
}: Props) => {
  useDocumentTitle(`${personaStep1Title} - Inotest`);
  return (
    <>
      <Header heading={personaName} textContent={personaStep1Title} />
      <Main>
        {personaName === "Djebrine" && (
          <>
            <BadFormNoSemanticIntro />
            <BadFormNoSemantic />
            <BadFormNoSemanticCode />
            <BadFormNoSemanticExp />
            <BadFormNoSemanticConclusion />
          </>
        )}

        {personaName === "Sophie" && (
          <>
            <BadShoppingNoFocus />
            <BadShoppingNoFocusExp />
          </>
        )}

        <DivLink
          labelLink1="Accueil"
          labelLink2="Continuer"
          srLabelLink1="Revenir à la page d'accueil de Inotest"
          srLabelLink2={`Continuer le parcours de ${personaName}`}
          urlLink1="/"
          urlLink2={`/persona${personaId}/step2`}
        />
      </Main>
    </>
  );
};
