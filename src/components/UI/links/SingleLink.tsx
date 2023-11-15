import { ButtonLink } from "./ButtonLink";

type Props = {
  srLabelLink: string;
  urlLink: string;
  labelLink: string;
};

export const SingleLink = ({ srLabelLink, urlLink, labelLink }: Props) => {
  return (
    <div className="flex justify-center">
      <ButtonLink aria-label={srLabelLink} href={urlLink}>
        {labelLink}
      </ButtonLink>
    </div>
  );
};
