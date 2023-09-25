type Props = { cardTitle: string; imgSrc: string };

export const PersonaCard = ({ cardTitle, imgSrc }: Props) => {
  return (
    <li className="mx-auto flex w-9/12 max-w-xs list-none flex-col justify-between rounded-2xl p-4 shadow-CustomCard outline outline-2 outline-black hover:cursor-pointer hover:shadow-CustomCardHover hover:-outline-offset-8">
      <h3>{cardTitle}</h3>
      <img alt="" className="mx-auto" src={imgSrc} />
    </li>
  );
};
