import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Heading1 = ({ children }: Props) => {
  return <h1 className="my-4 text-center text-4xl">{children}</h1>;
};
