import type { JSX } from "react";

import { cn } from "../../../helpers/cn";

type Props = JSX.IntrinsicElements["main"];

export const Main = ({ children, className, ...rest }: Props) => {
  return (
    <main
      className={cn("mx-auto my-12 w-11/12 lg:w-9/12", className)}
      id="main"
      role="main"
      {...rest}
    >
      {children}
    </main>
  );
};
