import { a11yDark, CodeBlock } from "react-code-blocks";

import { codes } from "../../../../data/codes";
import { Heading2 } from "../../../UI/headings/Heading2";
import { Section } from "../../../UI/sections/Section";

export const A11FormCode = () => {
  return (
    <Section>
      <Heading2>Code</Heading2>
      <CodeBlock
        language="html"
        text={codes.Persona1A11yForm}
        theme={a11yDark}
      />
    </Section>
  );
};
