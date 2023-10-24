import type { DetailedHTMLProps, DetailsHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = DetailedHTMLProps<DetailsHTMLAttributes<HTMLElement>, HTMLElement>;

export const Section = ({ children, className, ...rest }: Props) => {
  const mergedClassName = twMerge(
    "my-10 rounded-2xl bg-white p-4 shadow-Custom lg:px-8",
    className,
  );

  return (
    <section className={mergedClassName} {...rest}>
      {children}
    </section>
  );
};
