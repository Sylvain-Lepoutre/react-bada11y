import { BadTable } from "../components/pages/persona1/persona1table1/BadTable";
import { BadTableCode } from "../components/pages/persona1/persona1table1/BadTableCode";
import { BadTableConclusion } from "../components/pages/persona1/persona1table1/BadTableConclusion";
import { BadTableExp } from "../components/pages/persona1/persona1table1/BadTableExp";
import { Header } from "../components/UI/headers/Header";
import { DivLink } from "../components/UI/links/DivLink";
import { Main } from "../components/UI/main/Main";

type Props = {
  componentName: string;
  nextUrl: string;
  personaHomeUrl: string;
  personaName: string;
};

export const Persona1Table1 = ({
  componentName,
  nextUrl,
  personaHomeUrl,
  personaName,
}: Props) => {
  return (
    <>
      <Header heading={personaName} textContent={componentName} />

      <Main>
        <BadTable />
        <BadTableCode />
        <BadTableExp />
        <BadTableConclusion />
      </Main>

      <DivLink
        labelLink1={`Accueil ${personaName}`}
        labelLink2="Continuer"
        srLabelLink1={`Revenir à la page d'accueil de ${personaName}`}
        srLabelLink2="Continuer ce parcous"
        urlLink1={personaHomeUrl}
        urlLink2={nextUrl}
      />
    </>
  );
};
