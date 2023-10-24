import type { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const Heading3 = ({ children, ...rest }: Props) => {
  return (
    <h3 className="my-4 text-center text-xl lg:text-2xl" {...rest}>
      {children}
    </h3>
  );
};
