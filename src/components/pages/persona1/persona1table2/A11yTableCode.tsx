import { useId } from "react";
import { a11yDark, CodeBlock } from "react-code-blocks";

import { codes } from "../../../../data/codes";
import { Heading2 } from "../../../UI/headings/Heading2";
import { Section } from "../../../UI/sections/Section";

export const A11TableCode = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Code</Heading2>
      <CodeBlock
        language="html"
        text={codes.Persona1A11yTable}
        theme={a11yDark}
      />
    </Section>
  );
};
