import { BadNav } from "../components/pages/persona1/persona1nav1/BadNav";
import { BadNavCode } from "../components/pages/persona1/persona1nav1/BadNavCode";
import { BadNavExp } from "../components/pages/persona1/persona1nav1/BadNavExp";
import { BadNavIntro } from "../components/pages/persona1/persona1nav1/BadNavIntro";
import { Header } from "../components/UI/headers/Header";
import { Main } from "../components/UI/main/Main";

type Props = {
  componentName: string;
  personaName: string;
};

export const Persona1Nav1 = ({ componentName, personaName }: Props) => {
  return (
    <>
      <Header heading={personaName} textContent={componentName} />

      <Main>
        <BadNavIntro />
        <BadNav />
        <BadNavCode />
        <BadNavExp />
      </Main>
    </>
  );
};
