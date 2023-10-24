import type { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const Heading2 = ({ children, className, ...rest }: Props) => {
  const combinedClassName = `my-4 text-center text-2xl lg:text-3xl ${
    className ?? ""
  }`;

  return (
    <h2 className={combinedClassName} {...rest}>
      {children}
    </h2>
  );
};
