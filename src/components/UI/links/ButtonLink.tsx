import type { JSX } from "react";

import { cn } from "~/helpers/cn";

type Props = JSX.IntrinsicElements["a"];

export const ButtonLink = ({ children, className, ...rest }: Props) => {
  return (
    <a
      className={cn("inline-block bg-BluePastel px-4 py-2", className)}
      {...rest}
    >
      {children}
    </a>
  );
};
