import { useState } from "react";

import { Heading3 } from "../../headings/Heading3";

type Props = {
  itemName: string;
};

export const BadShoppingItem = ({ itemName }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <li className="flex border-spacing-4 flex-col justify-center rounded-2xl border border-black">
      <Heading3>{itemName}</Heading3>
      <img alt="" className="mx-auto" src="https://placehold.co/256x256/png" />
      <button
        className="mx-auto my-4 w-fit rounded-2xl border border-black bg-gray-300 p-4 outline-none"
        onClick={handleAddToCart}
      >
        Ajouter au panier
      </button>
      {isModalOpen && (
        <div className="mx-auto flex w-8/12 items-center p-4 text-center">
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
