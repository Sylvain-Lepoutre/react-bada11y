import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Main = ({ children, className, ...rest }: Props) => {
  const mergedClassName = twMerge("mx-auto my-12 w-11/12 lg:w-9/12", className);

  return (
    <main className={mergedClassName} role="main" {...rest}>
      {children}
    </main>
  );
};
