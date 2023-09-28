import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Section = ({ children }: Props) => {
  return (
    <section className="my-10 rounded-2xl bg-white p-4 shadow-Custom">
      {children}
    </section>
  );
};
