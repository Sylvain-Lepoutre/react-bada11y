import { useState } from "react";

import { Heading3 } from "../../UI/headings/Heading3";

type Props = {
  itemName: string;
};

export const A11yShoppingItem = ({ itemName }: Props) => {
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
      <img alt="" className="mx-auto" src="https://placehold.co/256x256/png" />
      <button
        className="mx-auto my-4 w-fit rounded-2xl border border-black bg-gray-300 p-4 focus:outline-double focus:outline-8"
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
