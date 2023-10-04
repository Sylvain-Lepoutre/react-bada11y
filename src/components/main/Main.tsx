import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Main = ({ children }: Props) => {
  return (
    <main className="mx-auto my-12 w-11/12" role="main">
      {children}
    </main>
  );
};
