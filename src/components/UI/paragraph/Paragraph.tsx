import type { DetailedHTMLProps, HTMLAttributes } from "react";

import { cn } from "../../../helpers/cn";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export const Paragraph = ({ children, className, ...rest }: Props) => {
  return (
    <p className={cn("my-4 text-center lg:text-xl", className)} {...rest}>
      {children}
    </p>
  );
};
