import { pStyles } from "../../../routes/root";

type Props = { cardTitle: string; cardContent: string };

export const ObjectiveCard = ({ cardTitle, cardContent }: Props) => {
  return (
    <article className="mx-auto flex w-9/12 max-w-lg list-none flex-col justify-between rounded-2xl p-4 shadow-Custom outline outline-2 outline-BluePastel">
      <h3 className="text-center text-xl">{cardTitle}</h3>
      <p className={pStyles}>{cardContent}</p>
    </article>
  );
};
