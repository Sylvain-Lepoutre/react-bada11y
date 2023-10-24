import type { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const Heading2 = ({ children, className, ...rest }: Props) => {
  const mergedClassName = twMerge(
    "my-4 text-center text-2xl lg:text-3xl",
    className,
  );

  return (
    <h2 className={mergedClassName} {...rest}>
      {children}
    </h2>
  );
};
