import { Heading3 } from "../../UI/headings/Heading3";
import { Paragraph } from "../../UI/paragraph/Paragraph";

type Props = { cardTitle: string; cardContent: string };

export const ObjectiveCard = ({ cardTitle, cardContent }: Props) => {
  return (
    <article className="mx-auto flex w-9/12 max-w-lg list-none flex-col justify-center rounded-2xl bg-gradient-to-br from-BluePastel to-BlueAqua p-4 shadow-Custom outline outline-2 outline-BluePastel">
      <Heading3>{cardTitle}</Heading3>
      <Paragraph>{cardContent}</Paragraph>
    </article>
  );
};
