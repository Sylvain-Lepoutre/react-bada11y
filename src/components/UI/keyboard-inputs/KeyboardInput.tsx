import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  keyName: string;
};

export const KeyBoardInput = ({ keyName, className, ...rest }: Props) => {
  const mergedClassName = twMerge(
    "mx-2 rounded-md border border-black bg-gray-100 px-2 py-1 text-black",
    className,
  );

  return (
    <span className={mergedClassName} {...rest}>
      {keyName}
    </span>
  );
};
