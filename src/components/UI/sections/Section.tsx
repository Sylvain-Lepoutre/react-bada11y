import type { DetailedHTMLProps, DetailsHTMLAttributes } from "react";

type Props = DetailedHTMLProps<DetailsHTMLAttributes<HTMLElement>, HTMLElement>;

export const Section = ({ children, ...rest }: Props) => {
  return (
    <section
      className="my-10 rounded-2xl bg-white p-4 shadow-Custom lg:px-8"
      {...rest}
    >
      {children}
    </section>
  );
};
