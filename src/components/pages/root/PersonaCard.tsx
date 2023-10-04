import { Link } from "react-router-dom";

import { Heading3 } from "../../UI/headings/Heading3";

type Props = { cardTitle: string; imgSrc: string; linkURL: string };

export const PersonaCard = ({ cardTitle, imgSrc, linkURL }: Props) => {
  return (
    <li className="mx-auto  w-9/12 max-w-xs list-none  rounded-2xl p-4 shadow-CustomCard outline outline-2 outline-BluePastel  hover:shadow-CustomCardHover hover:-outline-offset-8">
      <Link
        aria-label={`Accédez au parcours de ${cardTitle}`}
        className="flex h-full flex-col justify-between rounded-2xl hover:cursor-pointer focus:scale-105 focus:font-bold focus:outline-none"
        to={linkURL}
      >
        <Heading3>{cardTitle}</Heading3>
        <img alt="" className="mx-auto" src={imgSrc} />
      </Link>
    </li>
  );
};
