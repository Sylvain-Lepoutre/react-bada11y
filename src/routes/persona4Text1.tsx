import { BadText } from "../components/pages/persona4/persona4text1/BadText";
import { BadTextCode } from "../components/pages/persona4/persona4text1/BadTextCode";
import { BadTextExp } from "../components/pages/persona4/persona4text1/BadTextExp";
import { BadTextIntro } from "../components/pages/persona4/persona4text1/BadTextIntro";
import { DivLink } from "../components/pages/personaHome/DivLink";
import { Header } from "../components/UI/headers/Header";
import { Main } from "../components/UI/main/Main";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type Props = {
  componentName: string;
  nextUrl: string;
  personaHomeUrl: string;
  personaName: string;
};

export const Persona4Text1 = ({
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
        <BadTextIntro />
        <BadText />
        <BadTextCode />
        <BadTextExp />
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
