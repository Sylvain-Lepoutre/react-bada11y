import { BadForm } from "../components/pages/persona1/persona1form1/BadForm";
import { BadFormCode } from "../components/pages/persona1/persona1form1/BadFormCode";
import { BadFormConclusion } from "../components/pages/persona1/persona1form1/BadFormConclusion";
import { BadFormExp } from "../components/pages/persona1/persona1form1/BadFormExp";
import { BadTable } from "../components/pages/persona1/persona1table1/BadTable";
import { DivLink } from "../components/pages/personaHome/DivLink";
import { Header } from "../components/UI/headers/Header";
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
        <BadForm />
        <BadFormCode />
        <BadFormExp />
        <BadFormConclusion />
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
