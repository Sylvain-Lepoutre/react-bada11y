import type { JSX } from "react";

import { cn } from "~/helpers/cn";

type Props = JSX.IntrinsicElements["h2"];

export const Heading2 = ({ children, className, ...rest }: Props) => {
  return (
    <h2 className={cn("text-center text-2xl lg:text-3xl", className)} {...rest}>
      {children}
    </h2>
  );
};
