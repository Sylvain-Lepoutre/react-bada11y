import { Heading3, Paragraph } from "~/components/UI";

type Props = { cardTitle: string; cardContent: string };

export const ObjectiveCard = ({ cardTitle, cardContent }: Props) => {
  return (
    <li className="">
      <Heading3>{cardTitle}</Heading3>

      <Paragraph>{cardContent}</Paragraph>
    </li>
  );
};
