import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Heading1 = ({ children }: Props) => {
  return <h1 className="text-center text-4xl">{children}</h1>;
};
