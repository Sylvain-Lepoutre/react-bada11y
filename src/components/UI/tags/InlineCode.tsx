import type { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  code: string;
};

export const InlineCode = ({ code }: Props) => {
  return <span className="rounded-md bg-gray-500/25 px-1">{code}</span>;
};
