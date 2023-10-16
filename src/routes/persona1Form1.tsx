import { Header } from "../components/UI/headers/Header";
import { Main } from "../components/UI/main/Main";
import { BadForm } from "../components/pages/persona1/persona1form1/BadForm";
import { BadFormCode } from "../components/pages/persona1/persona1form1/BadFormCode";
import { BadFormConclusion } from "../components/pages/persona1/persona1form1/BadFormConclusion";
import { BadFormExp } from "../components/pages/persona1/persona1form1/BadFormExp";
import { BadFormIntro } from "../components/pages/persona1/persona1form1/BadFormIntro";

type Props = { personaName: string; componentName: string };

export const Persona1Form1 = ({ personaName, componentName }: Props) => {
  return (
    <>
      <Header heading={personaName} textContent={componentName} />
      <Main>
        <BadFormIntro />
        <BadForm />
        <BadFormCode />
        <BadFormExp />
        <BadFormConclusion />
      </Main>
    </>
  );
};
