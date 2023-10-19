import { a11yDark, CodeBlock } from "react-code-blocks";

import { Heading2 } from "../../../UI/headings/Heading2";
import { Section } from "../../../UI/sections/Section";
import { codes } from "../../../../data/codes";

export const BadNavCode = () => {
  return (
    <Section>
      <Heading2>Code</Heading2>
      <CodeBlock language="html" text={codes.Persona1BadNav} theme={a11yDark} />
    </Section>
  );
};
