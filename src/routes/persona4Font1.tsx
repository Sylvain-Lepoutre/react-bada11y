import { BadFont } from "../components/pages/persona4/persona4font1/BadFont";
import { BadFontConclusion } from "../components/pages/persona4/persona4font1/BadFontConclusion";
import { BadFontExp } from "../components/pages/persona4/persona4font1/BadFontExp";
import { BadFontIntro } from "../components/pages/persona4/persona4font1/BadFontIntro";
import { Header } from "../components/UI/headers/Header";
import { DivLink } from "../components/UI/links/DivLink";
import { Main } from "../components/UI/main/Main";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type Props = {
  componentName: string;
  nextUrl: string;
  personaHomeUrl: string;
  personaName: string;
};

export const Persona4Font1 = ({
  componentName,
  nextUrl,
  personaHomeUrl,
  personaName,
}: Props) => {
  useDocumentTitle(`${componentName} - ${personaName} - Inotest`);

  return (
    <>
      <Header heading={personaName} textContent={componentName} />

      <Main>
        <BadFontIntro />
        <BadFont />
        <BadFontExp />
        <BadFontConclusion />
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
