import type { JSX } from "react";

type Props = JSX.IntrinsicElements["div"];

export const SrDisplay = ({ children }: Props) => {
  return <div className="rounded-xl border bg-gray-400 p-4">{children}</div>;
};
