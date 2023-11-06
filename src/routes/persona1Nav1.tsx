import { BadNav } from "../components/pages/persona1/persona1nav1/BadNav";
import { BadNavCode } from "../components/pages/persona1/persona1nav1/BadNavCode";
import { BadNavExp } from "../components/pages/persona1/persona1nav1/BadNavExp";
import { BadNavIntro } from "../components/pages/persona1/persona1nav1/BadNavIntro";
import { Header } from "../components/UI/headers/Header";
import { DivLink } from "../components/UI/links/DivLink";
import { Main } from "../components/UI/main/Main";

type Props = {
  componentName: string;
  nextUrl: string;
  personaHomeUrl: string;
  personaName: string;
};

export const Persona1Nav1 = ({
  componentName,
  nextUrl,
  personaHomeUrl,
  personaName,
}: Props) => {
  return (
    <>
      <Header heading={personaName} textContent={componentName} />

      <Main>
        <BadNavIntro />
        <BadNav />
        <BadNavCode />
        <BadNavExp />
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
