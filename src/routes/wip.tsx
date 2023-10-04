import { Heading1 } from "../components/headings/Heading1";
import { ButtonLink } from "../components/links/ButtonLink";
import { Section } from "../components/sections/Section";

export const Wip = () => (
  <main className="mx-auto my-12 w-11/12">
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
  </main>
);
