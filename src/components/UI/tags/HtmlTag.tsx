type Props = {
  tagName: string;
};

export const HtmlTag = ({ tagName }: Props) => {
  return <span>&lt;{tagName}&gt;</span>;
};
