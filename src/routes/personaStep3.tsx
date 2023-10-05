import { Header } from "../components/UI/headers/Header";
import { Main } from "../components/UI/main/Main";
import { A11yForm } from "../components/pages/persona1step3/A11yForm";

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
          </>
        )}
      </Main>
    </>
  );
};
