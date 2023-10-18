import { A11yTable } from "../components/pages/persona1/persona1table2/A11yTable";
import { Header } from "../components/UI/headers/Header";
import { Main } from "../components/UI/main/Main";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type Props = {
  componentName: string;
  personaName: string;
};

export const Persona1Table2 = ({ componentName, personaName }: Props) => {
  useDocumentTitle(`${componentName} - ${personaName} - Inotest`);

  return (
    <>
      <Header heading={personaName} textContent={componentName} />

      <Main>
        <A11yTable />
      </Main>
    </>
  );
};
