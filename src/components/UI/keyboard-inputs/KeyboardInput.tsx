import type { DetailedHTMLProps, HTMLAttributes } from "react";

import { cn } from "../../../helpers/cn";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  keyName: string;
};

export const KeyBoardInput = ({ keyName, className, ...rest }: Props) => {
  return (
    <span
      className={cn(
        "mx-2 rounded-md border border-black bg-gray-100 px-3 py-1 text-black",
        className,
      )}
      {...rest}
    >
      {keyName}
    </span>
  );
};
