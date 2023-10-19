import { A11yTableExp } from "../components/pages/persona1/persona1table2/A11TableExp";
import { A11yTable } from "../components/pages/persona1/persona1table2/A11yTable";
import { A11TableCode } from "../components/pages/persona1/persona1table2/A11yTableCode";
import { DivLink } from "../components/pages/personaHome/DivLink";
import { Header } from "../components/UI/headers/Header";
import { Main } from "../components/UI/main/Main";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type Props = {
  componentName: string;
  personaHomeUrl: string;
  personaName: string;
};

export const Persona1Table2 = ({
  componentName,
  personaHomeUrl,
  personaName,
}: Props) => {
  useDocumentTitle(`${componentName} - ${personaName} - Inotest`);

  return (
    <>
      <Header heading={personaName} textContent={componentName} />

      <Main>
        <A11yTable />
        <A11TableCode />
        <A11yTableExp />
      </Main>

      <DivLink
        labelLink1={`Accueil ${personaName}`}
        labelLink2="Accueil Inotest"
        srLabelLink1={`Revenir à la page d'accueil de ${personaName}`}
        srLabelLink2="Revenir à la page d'accueil Inotest"
        urlLink1={personaHomeUrl}
        urlLink2="/"
      />
    </>
  );
};
