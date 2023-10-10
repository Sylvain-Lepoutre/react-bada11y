import { Header } from "../components/UI/headers/Header";

type Props = {
  personaName: string;
  personaStep4Title: string;
};

export const PersonaStep4 = ({ personaName, personaStep4Title }: Props) => {
  return (
    <>
      <Header heading={personaName} textContent={personaStep4Title} />
    </>
  );
};
