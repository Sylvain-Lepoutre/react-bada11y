import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Heading2 = ({ children }: Props) => {
  return <h2 className="my-4 text-center text-2xl">{children}</h2>;
};
