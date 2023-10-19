import { useState } from "react";

import { Heading3 } from "../../../UI/headings/Heading3";

type Props = {
  imgFile: string;
  itemName: string;
};

export const BadShoppingItem = ({ imgFile, itemName }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <li className="relative flex border-spacing-4 flex-col items-center justify-center rounded-2xl border border-black">
      <Heading3>{itemName}</Heading3>
      <img alt="" className="mx-auto h-72 w-80" src={`/img/${imgFile}`} />
      <button
        aria-label={`Ajouter ${itemName} au panier`}
        className="mx-auto my-4 w-fit rounded-2xl border border-black bg-gray-300 p-4 text-white outline-none"
        onClick={handleAddToCart}
      >
        Ajouter au panier
      </button>
      {isModalOpen && (
        <div className="absolute mx-auto flex w-8/12 items-center rounded-2xl bg-gradient-to-br from-BluePastel to-BlueAqua p-4 text-center opacity-75">
          <p>{`Vous avez ajouté ${itemName} au panier.`}</p>
          <span
            className="text-5xl outline-none"
            onClick={closeModal}
            onKeyDown={closeModal}
            role="button"
            tabIndex={0}
          >
            &times;
          </span>
        </div>
      )}
    </li>
  );
};
