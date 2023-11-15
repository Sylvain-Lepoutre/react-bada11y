import type { JSX } from "react";

type Props = JSX.IntrinsicElements["span"] & {
  code: string;
};

export const InlineCode = ({ code }: Props) => {
  return <span className="rounded-md bg-gray-500/25 px-1">{code}</span>;
};
