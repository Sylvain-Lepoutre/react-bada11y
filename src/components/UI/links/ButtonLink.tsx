import { Link, type LinkProps } from "react-router-dom";

type Props = LinkProps & {
  label: string;
};

export const ButtonLink = ({ label, ...rest }: Props) => {
  return (
    <Link
      className="items-center rounded-2xl bg-white p-4 text-center shadow-CustomCard outline outline-2 outline-BluePastel hover:cursor-pointer hover:shadow-CustomCardHover hover:-outline-offset-8  focus:scale-105 focus:font-bold"
      {...rest}
    >
      {label}
    </Link>
  );
};
