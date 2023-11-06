import { A11yNav } from "../components/pages/persona1/persona1nav2/A11yNav";
import { A11yNavCode } from "../components/pages/persona1/persona1nav2/A11yNavCode";
import { A11yNavExp } from "../components/pages/persona1/persona1nav2/A11yNavExp";
import { Header } from "../components/UI/headers/Header";
import { DivLink } from "../components/UI/links/DivLink";
import { Main } from "../components/UI/main/Main";

type Props = {
  componentName: string;
  personaHomeUrl: string;
  personaName: string;
};

export const Persona1Nav2 = ({
  componentName,
  personaHomeUrl,
  personaName,
}: Props) => {
  return (
    <>
      <Header heading={personaName} textContent={componentName} />
      <Main>
        <A11yNav />
        <A11yNavCode />
        <A11yNavExp />
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
