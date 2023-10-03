type Props = {
  keyName: string;
};

export const KeyBoardInput = ({ keyName }: Props) => {
  return (
    <span className="mx-2 rounded-md border border-black px-2 py-1 text-red-600">
      {keyName}
    </span>
  );
};
