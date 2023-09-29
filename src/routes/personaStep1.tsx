import { Header } from "../components/headers/Header";
import { BadFormNoSemanticSection } from "../components/pages/persona1step1/BadFormNoSemanticSection";
import { BadFormNoSemanticSectionSR } from "../components/pages/persona1step1/BadFormNoSemanticSectionSR";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type Props = { personaName: string };

export const PersonaStep1 = ({ personaName }: Props) => {
  useDocumentTitle(`Etape 1 - Formulaire - Inotest`);
  return (
    <>
      <Header heading={personaName} textContent="Etape 1 : Formulaire" />
      <main className="mx-auto my-12 w-11/12">
        <BadFormNoSemanticSection />

        {personaName === "Djebrine" ? <BadFormNoSemanticSectionSR /> : null}
        {personaName === "Sophie" ? <h1>Test</h1> : null}
      </main>
    </>
  );
};
