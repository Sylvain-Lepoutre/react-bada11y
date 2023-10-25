import type { DetailedHTMLProps, HTMLAttributes } from "react";

import { cn } from "../../../helpers/cn";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Main = ({ children, className, ...rest }: Props) => {
  return (
    <main
      className={cn("mx-auto my-12 w-11/12 lg:w-9/12", className)}
      role="main"
      {...rest}
    >
      {children}
    </main>
  );
};
