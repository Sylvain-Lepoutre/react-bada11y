import { type JSX } from "react";

import { cn } from "~/helpers";

type Props = JSX.IntrinsicElements["main"];

export const MainPanel = ({ children, className, ...rest }: Props) => {
  return (
    <main className={cn("", className)} {...rest}>
      {children}
    </main>
  );
};
