import { Heading2 } from "../../UI/headings/Heading2";
import { Section } from "../../UI/sections/Section";

import type { Step } from "../../../data/personas";
import { StepCard } from "./StepCard";

type Props = { steps: Step[] };

export const StepSection = ({ steps }: Props) => {
  console.log(steps);

  return (
    <Section>
      <Heading2>Choisissez votre étape</Heading2>
      <ul className="my-8 grid gap-12 text-center md:grid-cols-2 lg:my-12">
        {steps.map((step) => (
          <StepCard name={step.name} key={step.id} pages={step.pages} />
        ))}
      </ul>
    </Section>
  );
};
