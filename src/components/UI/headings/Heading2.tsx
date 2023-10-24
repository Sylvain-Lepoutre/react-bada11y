import type { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const Heading2 = ({ children, ...rest }: Props) => {
  return (
    <h2 className="my-4 text-center text-2xl lg:text-3xl" {...rest}>
      {children}
    </h2>
  );
};
