import { BadForm } from "../components/pages/persona1/persona1form1/BadForm";
import { BadFormCode } from "../components/pages/persona1/persona1form1/BadFormCode";
import { BadFormConclusion } from "../components/pages/persona1/persona1form1/BadFormConclusion";
import { BadFormExp } from "../components/pages/persona1/persona1form1/BadFormExp";
import { BadFormIntro } from "../components/pages/persona1/persona1form1/BadFormIntro";
import { DivLink } from "../components/pages/personaHome/DivLink";
import { Header } from "../components/UI/headers/Header";
import { Main } from "../components/UI/main/Main";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type Props = {
  componentName: string;
  personaHomeUrl: string;
  nextUrl: string;
  personaName: string;
};

export const Persona1Form1 = ({
  componentName,
  personaHomeUrl,
  nextUrl,
  personaName,
}: Props) => {
  useDocumentTitle(`${componentName} - ${personaName} - Inotest`);

  return (
    <>
      <Header heading={personaName} textContent={componentName} />

      <Main>
        <BadFormIntro />
        <BadForm />
        <BadFormCode />
        <BadFormExp />
        <BadFormConclusion />
      </Main>

      <DivLink
        labelLink1={`Accueil ${personaName}`}
        labelLink2="Continuer"
        srLabelLink1={`Revenir à la page d'accueil de ${personaName}`}
        srLabelLink2="Continuer ce parcours"
        urlLink1={personaHomeUrl}
        urlLink2={nextUrl}
      />
    </>
  );
};
