import { A11yShopping } from "../components/pages/persona2/persona2shopping2/A11yShopping";
import { A11yShoppingExp } from "../components/pages/persona2/persona2shopping2/A11yShoppingExp";
import { DivLink } from "../components/pages/personaHome/DivLink";
import { Header } from "../components/UI/headers/Header";
import { Main } from "../components/UI/main/Main";

type Props = {
  componentName: string;
  personaHomeUrl: string;
  personaName: string;
};

export const Persona2Shopping2 = ({
  componentName,
  personaHomeUrl,
  personaName,
}: Props) => {
  return (
    <>
      <Header heading={personaName} textContent={componentName} />

      <Main>
        <A11yShopping />
        <A11yShoppingExp />
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
