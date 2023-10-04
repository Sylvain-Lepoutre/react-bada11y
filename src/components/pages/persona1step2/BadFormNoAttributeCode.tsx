import { atomOneDark, CodeBlock } from "react-code-blocks";

import { codes } from "../../../data/codes";
import { Heading2 } from "../../headings/Heading2";
import { Section } from "../../sections/Section";

export const BadFormNoAttributeCode = () => {
  return (
    <Section>
      <Heading2>Code</Heading2>
      <CodeBlock
        language="html"
        text={codes.BadFormNoAttribute}
        theme={atomOneDark}
      />
    </Section>
  );
};
