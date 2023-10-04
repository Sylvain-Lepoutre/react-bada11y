import { Heading1 } from "../components/UI/headings/Heading1";
import { ButtonLink } from "../components/UI/links/ButtonLink";
import { Main } from "../components/UI/main/Main";
import { Section } from "../components/UI/sections/Section";

export const Wip = () => (
  <Main>
    <Section>
      <Heading1>Work in Progress</Heading1>
    </Section>

    <div className="text-center">
      <ButtonLink
        label="Accueil"
        srLabel="Revenir à la page d'accueil de Inotest"
        url="/"
      />
    </div>
  </Main>
);
