import { A11yFont } from "../components/pages/persona4/persona4font2/A11yFont";
import { A11yFontExp } from "../components/pages/persona4/persona4font2/A11yFontExp";
import { Header } from "../components/UI/headers/Header";
import { DivLink } from "../components/UI/links/DivLink";
import { Main } from "../components/UI/main/Main";

type Props = {
  componentName: string;
  personaHomeUrl: string;
  personaName: string;
};

export const Persona4Font2 = ({
  componentName,
  personaHomeUrl,
  personaName,
}: Props) => {
  return (
    <>
      <Header heading={personaName} textContent={componentName} />

      <Main>
        <A11yFont />
        <A11yFontExp />
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
