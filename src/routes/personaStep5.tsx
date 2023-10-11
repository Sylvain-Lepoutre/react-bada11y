import { BadTableNoAttribute } from "../components/pages/persona1step5/BadTableNoAttribute";
import { Header } from "../components/UI/headers/Header";
import { Main } from "../components/UI/main/Main";

type Props = {
  personaName: string;
  personaStep5Title: string;
  personaId: number;
};

export const PersonaStep5 = ({ personaName, personaStep5Title }: Props) => {
  return (
    <>
      <Header heading={personaName} textContent={personaStep5Title} />

      <Main>
        {personaName === "Djebrine" && (
          <>
            <BadTableNoAttribute />
          </>
        )}
      </Main>
    </>
  );
};
