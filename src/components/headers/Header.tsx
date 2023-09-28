type Props = {
  heading: string;
  textContent: string;
  imgPath: string;
};

export const Header = ({ heading, textContent, imgPath }: Props) => {
  return (
    <header
      className="mx-auto my-4 w-9/12 rounded-2xl bg-white p-4 shadow-Custom"
      role="banner"
    >
      <h1 className="text-center text-4xl">{heading}</h1>
      <p className="my-4 text-center text-2xl">{textContent}</p>
      <img alt="" className="mx-auto w-20" src={imgPath} />
    </header>
  );
};
