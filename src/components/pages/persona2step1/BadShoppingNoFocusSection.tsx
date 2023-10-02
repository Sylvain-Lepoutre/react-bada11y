import { useState } from "react";

import { Heading2 } from "../../headings/Heading2";
import { Heading3 } from "../../headings/Heading3";
import { Section } from "../../sections/Section";

export const BadShoppingNoFocusSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddToCart = () => {
    console.log(isModalOpen);
    setModalOpen(true);
    console.log(isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Section>
      <div className="my-12">
        <Heading2>Fruits</Heading2>
        <ul className="grid grid-cols-4 gap-8">
          <li className="flex border-spacing-4 flex-col justify-center rounded-2xl border border-black">
            <Heading3 className="my-4 text-center text-xl">Fruit 1</Heading3>
            <img
              alt=""
              className="mx-auto"
              src="https://placehold.co/256x256/png"
            />
            <button
              className="mx-auto my-4 w-fit rounded-2xl border border-black bg-gray-300 p-4 outline-none"
              onClick={handleAddToCart}
            >
              Ajouter au panier
            </button>
            {isModalOpen && (
              <div className="mx-auto flex w-8/12 items-center p-4 text-center">
                <p>Vous avez ajouté ce produit au panier.</p>
                <span
                  className="text-5xl"
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
          <li className="flex border-spacing-4 flex-col justify-center rounded-2xl border border-black">
            <Heading3 className="my-4 text-center text-xl">Fruit 2</Heading3>
            <img
              alt=""
              className="mx-auto"
              src="https://placehold.co/256x256/png"
            />
            <button className="mx-auto my-4 w-fit rounded-2xl border border-black bg-gray-300 p-4 outline-none">
              Ajouter au panier
            </button>
          </li>
          <li className="flex border-spacing-4 flex-col justify-center rounded-2xl border border-black">
            <Heading3 className="my-4 text-center text-xl">Fruit 3</Heading3>
            <img
              alt=""
              className="mx-auto"
              src="https://placehold.co/256x256/png"
            />
            <button className="mx-auto my-4 w-fit rounded-2xl border border-black bg-gray-300 p-4 outline-none">
              Ajouter au panier
            </button>
          </li>
          <li className="flex border-spacing-4 flex-col justify-center rounded-2xl border border-black">
            <Heading3 className="my-4 text-center text-xl">Fruit 4</Heading3>
            <img
              alt=""
              className="mx-auto"
              src="https://placehold.co/256x256/png"
            />
            <button className="mx-auto my-4 w-fit rounded-2xl border border-black bg-gray-300 p-4 outline-none">
              Ajouter au panier
            </button>
          </li>
        </ul>
      </div>
      <div>
        <Heading2>Légumes</Heading2>
        <ul className="grid grid-cols-4 gap-8">
          <li className="flex border-spacing-4 flex-col justify-center rounded-2xl border border-black">
            <Heading3>Légume 1</Heading3>
            <img
              alt=""
              className="mx-auto"
              src="https://placehold.co/256x256/png"
            />
            <button className="mx-auto my-4 w-fit rounded-2xl border border-black bg-gray-300 p-4 outline-none">
              Ajouter au panier
            </button>
          </li>
          <li className="flex border-spacing-4 flex-col justify-center rounded-2xl border border-black">
            <Heading3>Légume 2</Heading3>
            <img
              alt=""
              className="mx-auto"
              src="https://placehold.co/256x256/png"
            />
            <button className="mx-auto my-4 w-fit rounded-2xl border border-black bg-gray-300 p-4 outline-none">
              Ajouter au panier
            </button>
          </li>
          <li className="flex border-spacing-4 flex-col justify-center rounded-2xl border border-black">
            <Heading3>Légume 3</Heading3>
            <img
              alt=""
              className="mx-auto"
              src="https://placehold.co/256x256/png"
            />
            <button className="mx-auto my-4 w-fit rounded-2xl border border-black bg-gray-300 p-4 outline-none">
              Ajouter au panier
            </button>
          </li>
          <li className="flex border-spacing-4 flex-col justify-center rounded-2xl border border-black">
            <Heading3>Legume 4</Heading3>
            <img
              alt=""
              className="mx-auto"
              src="https://placehold.co/256x256/png"
            />
            <button className="mx-auto my-4 w-fit rounded-2xl border border-black bg-gray-300 p-4 outline-none">
              Ajouter au panier
            </button>
          </li>
        </ul>
      </div>
    </Section>
  );
};
