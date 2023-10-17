import { Header } from "../components/UI/headers/Header";
import { Main } from "../components/UI/main/Main";
import { A11yTable } from "../components/pages/persona1/persona1table2/A11yTable";

type Props = {
  componentName: string;
  personaName: string;
};

export const Persona1Table2 = ({ componentName, personaName }: Props) => {
  return (
    <>
      <Header heading={personaName} textContent={componentName} />

      <Main>
        <A11yTable />
      </Main>
    </>
  );
};
