import { Header } from "../components/UI/headers/Header";

type Props = {
  componentName: string;
  personaName: string;
};

export const Persona1Table2 = ({ componentName, personaName }: Props) => {
  return (
    <>
      <Header heading={personaName} textContent={componentName} />
    </>
  );
};
