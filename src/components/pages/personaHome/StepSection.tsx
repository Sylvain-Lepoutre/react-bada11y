import { useId } from "react";
import type { Step } from "../../../data/personas";
import { Heading2 } from "../../UI/headings/Heading2";
import { Section } from "../../UI/sections/Section";
import { StepCard } from "./StepCard";

type Props = { steps: Step[] };

export const StepSection = ({ steps }: Props) => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Choisissez votre étape</Heading2>
      <nav>
        <ul className="my-8 grid gap-12 text-center md:grid-cols-2 lg:my-12">
          {steps.map((step) => (
            <StepCard
              id={step.id}
              key={step.id}
              name={step.name}
              pages={step.pages}
            />
          ))}
        </ul>
      </nav>
    </Section>
  );
};
