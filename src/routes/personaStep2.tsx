import { A11yForm } from "../components/pages/persona1/persona1form2/A11yForm";
import { A11FormCode } from "../components/pages/persona1/persona1form2/A11yFormCode";
import { A11yFormExp } from "../components/pages/persona1/persona1form2/A11yFormExp";
import { A11yShopping } from "../components/pages/persona2step2/A11yShopping";
import { A11yShoppingExp } from "../components/pages/persona2step2/A11yShoppingExp";
import { DivLink } from "../components/pages/personaHome/DivLink";
import { Header } from "../components/UI/headers/Header";
import { Main } from "../components/UI/main/Main";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type Props = {
  personaName: string;
  personaStep2Title: string;
  personaId: number;
};

export const PersonaStep2 = ({
  personaName,
  personaStep2Title,
  personaId,
}: Props) => {
  useDocumentTitle(`${personaStep2Title} - Inotest`);
  return (
    <>
      <Header heading={personaName} textContent={personaStep2Title} />

      <Main>
        {personaName === "Djebrine" && (
          <>
            <A11yForm />
            <A11FormCode />
            <A11yFormExp />
          </>
        )}

        {personaName === "Sophie" && (
          <>
            <A11yShopping />
            <A11yShoppingExp />
          </>
        )}

        <DivLink
          labelLink1="Accueil Inotest"
          labelLink2={`Accueil ${personaName}`}
          srLabelLink1="Revenir à la page d'accueil de Inotest"
          srLabelLink2={`Revenir à l'accueil du parcours de ${personaName}`}
          urlLink1="/"
          urlLink2={`/persona${personaId}`}
        />
      </Main>
    </>
  );
};
