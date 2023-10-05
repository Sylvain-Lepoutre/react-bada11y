import { Header } from "../components/UI/headers/Header";

type Props = {
  personaName: string;
  personaStep3Title: string;
  personaId: number;
};

export const PersonaStep3 = ({ personaName, personaStep3Title }: Props) => {
  return <Header heading={personaName} textContent={personaStep3Title} />;
};
