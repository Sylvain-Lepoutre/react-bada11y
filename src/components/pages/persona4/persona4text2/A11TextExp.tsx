import { useId } from "react";
import { Section } from "../../../UI/sections/Section";
import { Heading2 } from "../../../UI/headings/Heading2";

export const A11yTextExp = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Explications</Heading2>
    </Section>
  );
};
