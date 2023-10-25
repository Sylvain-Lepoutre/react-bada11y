import type { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

import { cn } from "../../../helpers/cn";

type Props = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const Heading3 = ({ children, className, ...rest }: Props) => {
  return (
    <h3
      className={cn("my-4 text-center text-xl lg:text-2xl", className)}
      {...rest}
    >
      {children}
    </h3>
  );
};
