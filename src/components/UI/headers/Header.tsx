import { Heading1 } from "../headings/Heading1";

type Props = {
  heading?: string;
  textContent?: string;
  imgPath?: string;
};

export const Header = ({ heading, textContent, imgPath }: Props) => {
  return (
    <header
      className="mx-auto my-4 w-9/12 rounded-2xl bg-white p-4 shadow-Custom lg:w-6/12"
      role="banner"
    >
      <Heading1>{heading}</Heading1>
      <p className="my-4 text-center text-xl lg:text-2xl">{textContent}</p>
      <img alt="" className="mx-auto w-20" src={imgPath} />
    </header>
  );
};
