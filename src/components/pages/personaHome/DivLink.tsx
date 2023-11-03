import { ButtonLink } from "../../UI/links/ButtonLink";

type Props = {
  labelLink1: string;
  srLabelLink1: string;
  urlLink1: string;
  labelLink2: string;
  srLabelLink2: string;
  urlLink2: string;
};

export const DivLink = ({
  labelLink1,
  srLabelLink1,
  urlLink1,
  labelLink2,
  srLabelLink2,
  urlLink2,
}: Props) => {
  return (
    <div className="mx-auto my-16 flex w-10/12 justify-between sm:w-6/12 lg:w-4/12">
      <ButtonLink
        aria-label={srLabelLink1}
        href={urlLink1}
        label={labelLink1}
      ></ButtonLink>
      <ButtonLink
        aria-label={srLabelLink2}
        href={urlLink2}
        label={labelLink2}
      ></ButtonLink>
    </div>
  );
};
