import type { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const Heading1 = ({ children, ...rest }: Props) => {
  return (
    <h1 className="my-4 text-center text-4xl lg:text-5xl" {...rest}>
      {children}
    </h1>
  );
};
