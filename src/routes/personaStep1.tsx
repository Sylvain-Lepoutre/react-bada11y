import { DivLink } from "../components/pages/personaHome/DivLink";
import { Header } from "../components/headers/Header";
import { BadFormNoSemanticSection } from "../components/pages/persona1step1/BadFormNoSemanticSection";
import { BadFormNoSemanticSectionSR } from "../components/pages/persona1step1/BadFormNoSemanticSectionSR";
import { BadFormNoFocusSection } from "../components/pages/persona2step1/BadFormNoFocusSection";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type Props = { personaName: string; personaStep1Title: string };

export const PersonaStep1 = ({ personaName, personaStep1Title }: Props) => {
  useDocumentTitle(`Etape 1 - Formulaire - Inotest`);
  return (
    <>
      <Header heading={personaName} textContent={personaStep1Title} />
      <main className="mx-auto my-12 w-11/12">
        {personaName === "Djebrine" ? <BadFormNoSemanticSection /> : null}
        {personaName === "Sophie" ? <BadFormNoFocusSection /> : null}

        {personaName === "Djebrine" ? (
          <BadFormNoSemanticSectionSR personaName={personaName} />
        ) : null}
        {personaName === "Sophie" ? <h1>Test</h1> : null}

        <DivLink
          labelLink1="Accueil"
          labelLink2="Continuer"
          srLabelLink1="Revenir à la page d'accueil de Inotest"
          srLabelLink2={`Continuer le parcours de ${personaName}`}
          urlLink1="/"
          urlLink2="/test"
        />
      </main>
    </>
  );
};
