import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Heading3 = ({ children }: Props) => {
  return <h3 className="my-4 text-center text-xl">{children}</h3>;
};
