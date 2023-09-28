import { ButtonLink } from "../../links/ButtonLink";

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
    <div className="mx-auto my-16 flex w-8/12 justify-between sm:w-6/12 lg:w-4/12">
      <ButtonLink
        label={labelLink1}
        srLabel={srLabelLink1}
        url={urlLink1}
      ></ButtonLink>
      <ButtonLink
        label={labelLink2}
        srLabel={srLabelLink2}
        url={urlLink2}
      ></ButtonLink>
    </div>
  );
};
