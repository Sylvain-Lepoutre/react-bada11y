import { Link } from "react-router-dom";

type Props = {
  label: string;
  srLabel: string;
  url: string;
};

export const ButtonLink = ({ label, srLabel, url }: Props) => {
  return (
    <Link
      aria-label={srLabel}
      className="rounded-2xl bg-white p-4 items-center text-center shadow-CustomCard outline outline-2 outline-BluePastel hover:cursor-pointer hover:shadow-CustomCardHover hover:-outline-offset-8  focus:scale-105 focus:font-bold"
      to={url}
    >
      {label}
    </Link>
  );
};
