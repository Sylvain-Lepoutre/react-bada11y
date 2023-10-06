type Props = {
  keyName: string;
};

export const KeyBoardInput = ({ keyName }: Props) => {
  return (
    <span className="mx-2 rounded-md border border-black bg-gray-100 px-2 py-1 text-black">
      {keyName}
    </span>
  );
};
