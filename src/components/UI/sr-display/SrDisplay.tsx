import type { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const SrDisplay = ({ children }: Props) => {
  return <div className="rounded-xl border bg-gray-400 p-4">{children}</div>;
};
