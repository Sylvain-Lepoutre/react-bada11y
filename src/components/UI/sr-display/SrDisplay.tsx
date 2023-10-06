import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SrDisplay = ({ children }: Props) => {
  return <div className="rounded-xl border bg-gray-400 p-4">{children}</div>;
};
