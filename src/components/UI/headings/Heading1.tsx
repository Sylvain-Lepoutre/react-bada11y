import type { DetailedHTMLProps, HTMLAttributes } from "react";

import { cn } from "../../../helpers/cn";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

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
