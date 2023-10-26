import { useDocumentTitle } from "../hooks/useDocumentTitle";

type Props = {
  componentName: string;
  personaHomeUrl: string;
  personaName: string;
};

export const Persona4Text2 = ({ componentName, personaName }: Props) => {
  useDocumentTitle(`${componentName} - ${personaName} - Inotest`);

  return (
    <>
      <h1>Test</h1>
    </>
  );
};
