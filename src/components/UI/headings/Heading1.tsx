import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const Heading1 = ({ children, className, ...rest }: Props) => {
  const mergedClassName = twMerge(
    "my-4 text-center text-4xl lg:text-5xl",
    className,
  );
  return (
    <h1 className={mergedClassName} {...rest}>
      {children}
    </h1>
  );
};
