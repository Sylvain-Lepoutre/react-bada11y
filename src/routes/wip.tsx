import { Heading1 } from "../components/UI/headings/Heading1";
import { ButtonLink } from "../components/UI/links/ButtonLink";
import { Main } from "../components/UI/main/Main";
import { Section } from "../components/UI/sections/Section";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const Wip = () => {
  useDocumentTitle("Work In Progess - Inotest");
  return (
    <Main>
      <Section>
        <Heading1>Work in Progress</Heading1>
      </Section>

      <div className="text-center">
        <ButtonLink
          aria-label="Revenir à la page d'accueil de Inotest"
          href="/"
          label="Accueil"
        />
      </div>
    </Main>
  );
};
