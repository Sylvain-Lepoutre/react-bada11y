import type { JSX } from "react";

import { cn } from "~/helpers/cn";

type Props = JSX.IntrinsicElements["p"];

export const Paragraph = ({ children, className, ...rest }: Props) => {
  return (
    <p className={cn("", className)} {...rest}>
      {children}
    </p>
  );
};
