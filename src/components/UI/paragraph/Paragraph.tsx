import type { ReactNode } from "react";

type Props = { children: ReactNode };

export const Paragraph = ({ children }: Props) => {
  return <p className="my-4 text-center lg:text-xl">{children}</p>;
};
