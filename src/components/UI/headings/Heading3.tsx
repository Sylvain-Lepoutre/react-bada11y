import type { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const Heading3 = ({ children, className, ...rest }: Props) => {
  const mergedClassName = twMerge(
    "my-4 text-center text-xl lg:text-2xl",
    className,
  );

  return (
    <h3 className={mergedClassName} {...rest}>
      {children}
    </h3>
  );
};
