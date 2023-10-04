import { Header } from "../components/headers/Header";
import { BadFormNoAttribute } from "../components/pages/persona1step2/BadFormNoAttribute";

type Props = { personaName: string; personaStep2Title: string };

export const PersonaStep2 = ({ personaName, personaStep2Title }: Props) => {
  return (
    <>
      <Header heading={personaName} textContent={personaStep2Title} />

      <main className="mx-auto my-12 w-11/12">
        <BadFormNoAttribute />
      </main>
    </>
  );
};
