import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export const Paragraph = ({ children, className, ...rest }: Props) => {
  const mergedClassName = twMerge("my-4 text-center lg:text-xl", className);

  return (
    <p className={mergedClassName} {...rest}>
      {children}
    </p>
  );
};
