import { useId } from "react";
import { a11yDark, CodeBlock } from "react-code-blocks";

import { codes } from "../../../../data/codes";
import { Heading2 } from "../../../UI/headings/Heading2";
import { Heading3 } from "../../../UI/headings/Heading3";
import { Section } from "../../../UI/sections/Section";

export const A11yTextCode = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Code</Heading2>

      <Heading3>HTML</Heading3>
      <CodeBlock
        language="html"
        text={codes.Persona4A11yTextHtml}
        theme={a11yDark}
      />

      <Heading3>CSS</Heading3>
      <CodeBlock
        language="html"
        text={codes.Persona4A11yTextCSS}
        theme={a11yDark}
      />
    </Section>
  );
};
