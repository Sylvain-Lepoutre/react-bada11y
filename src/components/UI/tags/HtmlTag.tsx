import type { JSX } from "react";

type Props = JSX.IntrinsicElements["span"] & {
  tagName: string;
};

export const HtmlTag = ({ tagName }: Props) => {
  return (
    <span className="rounded-md bg-gray-500/25 px-1">&lt;{tagName}&gt;</span>
  );
};
