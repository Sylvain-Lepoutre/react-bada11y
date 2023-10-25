import { BadText } from "../components/pages/persona4/persona4text1/BadText";
import { BadTextCode } from "../components/pages/persona4/persona4text1/BadTextCode";
import { BadTextIntro } from "../components/pages/persona4/persona4text1/BadTextIntro";
import { Header } from "../components/UI/headers/Header";
import { Main } from "../components/UI/main/Main";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type Props = {
  componentName: string;
  personaName: string;
};

export const Persona4Text1 = ({ componentName, personaName }: Props) => {
  useDocumentTitle(`${componentName} - ${personaName} - Inotest`);

  return (
    <>
      <Header heading={personaName} textContent={componentName} />

      <Main>
        <BadTextIntro />
        <BadText />
        <BadTextCode />
      </Main>
    </>
  );
};
