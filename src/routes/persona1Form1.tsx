import { BadForm } from "../components/pages/persona1/persona1form1/BadForm";
import { BadFormCode } from "../components/pages/persona1/persona1form1/BadFormCode";
import { BadFormConclusion } from "../components/pages/persona1/persona1form1/BadFormConclusion";
import { BadFormExp } from "../components/pages/persona1/persona1form1/BadFormExp";
import { BadFormIntro } from "../components/pages/persona1/persona1form1/BadFormIntro";
import { DivLink } from "../components/pages/personaHome/DivLink";
import { Header } from "../components/UI/headers/Header";
import { Main } from "../components/UI/main/Main";

type Props = {
  componentName: string;
  homeUrl: string;
  nextUrl: string;
  personaName: string;
};

export const Persona1Form1 = ({
  componentName,
  homeUrl,
  nextUrl,
  personaName,
}: Props) => {
  console.log(homeUrl);

  console.log(nextUrl);

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
        urlLink1={homeUrl}
        urlLink2={nextUrl}
      />
    </>
  );
};
