import type { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  tagName: string;
};

export const HtmlTag = ({ tagName }: Props) => {
  return <span>&lt;{tagName}&gt;</span>;
};
