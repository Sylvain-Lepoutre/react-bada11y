import { Header } from "../components/UI/headers/Header";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type Props = {
  componentName: string;
  personaName: string;
};

export const Persona4Font2 = ({ componentName, personaName }: Props) => {
  useDocumentTitle(`${componentName} - ${personaName} - Inotest`);

  return (
    <>
      <Header heading={personaName} textContent={componentName} />
    </>
  );
};
