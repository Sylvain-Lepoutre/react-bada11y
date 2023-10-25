import type { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

import { cn } from "../../../helpers/cn";

type Props = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const Heading2 = ({ children, className, ...rest }: Props) => {
  return (
    <h2
      className={cn("my-4 text-center text-2xl lg:text-3xl", className)}
      {...rest}
    >
      {children}
    </h2>
  );
};
