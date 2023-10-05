import { A11yForm } from "../components/pages/persona1step3/A11yForm";
import { A11FormCode } from "../components/pages/persona1step3/A11yFormCode";
import { DivLink } from "../components/pages/personaHome/DivLink";
import { Header } from "../components/UI/headers/Header";
import { Main } from "../components/UI/main/Main";

type Props = {
  personaName: string;
  personaStep3Title: string;
  personaId: number;
};

export const PersonaStep3 = ({ personaName, personaStep3Title }: Props) => {
  return (
    <>
      <Header heading={personaName} textContent={personaStep3Title} />

      <Main>
        {personaName === "Djebrine" && (
          <>
            <A11yForm />
            <A11FormCode />
          </>
        )}

        <DivLink
          labelLink1="Accueil"
          labelLink2="Continuer"
          srLabelLink1="Revenir à la page d'accueil de Inotest"
          srLabelLink2={`Continuer le parcours de ${personaName}`}
          urlLink1="/"
          urlLink2={`/wip`}
        />
      </Main>
    </>
  );
};
