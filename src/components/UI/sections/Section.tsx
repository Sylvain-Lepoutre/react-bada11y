import type { JSX } from "react";

import { cn } from "~/helpers/cn";

type Props = JSX.IntrinsicElements["section"];

export const Section = ({ children, className, ...rest }: Props) => {
  return (
    <section className={cn("", className)} {...rest}>
      {children}
    </section>
  );
};
