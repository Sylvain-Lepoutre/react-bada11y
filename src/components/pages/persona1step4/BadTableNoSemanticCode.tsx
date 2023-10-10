import { CodeBlock, a11yDark } from "react-code-blocks";
import { Heading2 } from "../../UI/headings/Heading2";
import { Section } from "../../UI/sections/Section";
import { codes } from "../../../data/codes";

export const BadTableNoSemanticCode = () => {
  return (
    <Section>
      <Heading2>Code</Heading2>
      <CodeBlock
        language="html"
        text={codes.BadTableNoSemantic}
        theme={a11yDark}
      />
    </Section>
  );
};