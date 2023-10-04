import { Header } from "../components/headers/Header";

type Props = { personaName: string; personaStep2Title: string };

export const PersonaStep2 = ({ personaName, personaStep2Title }: Props) => {
  return (
    <>
      <Header heading={personaName} textContent={personaStep2Title} />
    </>
  );
};
