import { A11yTextExp } from "../components/pages/persona4/persona4text2/A11TextExp";
import { A11yText } from "../components/pages/persona4/persona4text2/A11yText";
import { A11yTextCode } from "../components/pages/persona4/persona4text2/A11yTextCode";
import { Header } from "../components/UI/headers/Header";
import { Main } from "../components/UI/main/Main";

type Props = {
  componentName: string;
  personaHomeUrl: string;
  personaName: string;
};

export const Persona4Text2 = ({ componentName, personaName }: Props) => {
  return (
    <>
      <Header heading={personaName} textContent={componentName} />

      <Main>
        <A11yText />
        <A11yTextCode />
        <A11yTextExp />
      </Main>
    </>
  );
};
