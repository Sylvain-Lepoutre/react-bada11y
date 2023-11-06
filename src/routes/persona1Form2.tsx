import { A11yForm } from "../components/pages/persona1/persona1form2/A11yForm";
import { A11FormCode } from "../components/pages/persona1/persona1form2/A11yFormCode";
import { A11yFormExp } from "../components/pages/persona1/persona1form2/A11yFormExp";
import { Header } from "../components/UI/headers/Header";
import { DivLink } from "../components/UI/links/DivLink";
import { Main } from "../components/UI/main/Main";

type Props = {
  componentName: string;
  personaHomeUrl: string;
  personaName: string;
};

export const Persona1Form2 = ({
  componentName,
  personaHomeUrl,
  personaName,
}: Props) => {
  return (
    <>
      <Header heading={personaName} textContent={componentName} />
      <Main>
        <A11yForm />
        <A11FormCode />
        <A11yFormExp />
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
