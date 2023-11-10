import type { Step } from "../../../data/personas";

type Props = Step;

export const StepCard = ({ name, pages }: Props) => {
  const url = pages[0] !== undefined ? pages[0].url : "";

  return (
    <li className="mx-auto  w-9/12 max-w-xs list-none  rounded-2xl p-4 shadow-CustomCard outline outline-2 outline-BluePastel  hover:shadow-CustomCardHover hover:-outline-offset-8">
      <a
        className="flex h-full flex-col justify-between rounded-2xl hover:cursor-pointer focus:scale-105 focus:font-bold focus:outline-none"
        href={url}
      >
        {name}
      </a>
    </li>
  );
};
