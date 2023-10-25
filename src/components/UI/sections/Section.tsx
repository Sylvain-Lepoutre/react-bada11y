import type { DetailedHTMLProps, DetailsHTMLAttributes } from "react";

import { cn } from "../../../helpers/cn";

type Props = DetailedHTMLProps<DetailsHTMLAttributes<HTMLElement>, HTMLElement>;

export const Section = ({ children, className, ...rest }: Props) => {
  return (
    <section
      className={cn(
        "my-10 rounded-2xl bg-white p-4 shadow-Custom lg:px-8",
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
};
