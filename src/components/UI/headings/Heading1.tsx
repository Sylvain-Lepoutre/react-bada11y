import type { JSX } from "react";

import { cn } from "~/helpers/cn";

type Props = JSX.IntrinsicElements["h1"];

export const Heading1 = ({ children, className, ...rest }: Props) => {
  return (
    <h1
      className={cn("my-4 text-center text-4xl lg:text-5xl", className)}
      {...rest}
    >
      {children}
    </h1>
  );
};
