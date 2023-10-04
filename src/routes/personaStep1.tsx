import { Header } from "../components/headers/Header";
import { BadFormConclusion } from "../components/pages/persona1step1/BadFormConclusion";
import { BadFormIntro } from "../components/pages/persona1step1/BadFormIntro";
import { BadFormNoSemanticCode } from "../components/pages/persona1step1/BadFormNoSemanticCode";
import { BadFormNoSemanticSection } from "../components/pages/persona1step1/BadFormNoSemanticSection";
import { BadFormNoSemanticSectionExp } from "../components/pages/persona1step1/BadFormNoSemanticSectionExp";
import { BadShoppingNoFocusSection } from "../components/pages/persona2step1/BadShoppingNoFocusSection";
import { BadShoppingNoFocusSectionExp } from "../components/pages/persona2step1/BadShoppingNoFocusSectionExp";
import { DivLink } from "../components/pages/personaHome/DivLink";
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
      <main className="mx-auto my-12 w-11/12">
        {personaName === "Djebrine" && (
          <>
            <BadFormIntro />
            <BadFormNoSemanticSection />
            <BadFormNoSemanticSectionExp />
            <BadFormNoSemanticCode />
            <BadFormConclusion />
          </>
        )}

        {personaName === "Sophie" && (
          <>
            <BadShoppingNoFocusSection />
            <BadShoppingNoFocusSectionExp />
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
      </main>
    </>
  );
};
