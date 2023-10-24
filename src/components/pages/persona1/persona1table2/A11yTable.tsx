import { useId } from "react";

import { Heading2 } from "../../../UI/headings/Heading2";
import { Section } from "../../../UI/sections/Section";

export const A11yTable = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Affichage dans le navigateur</Heading2>
      <table className="mx-auto my-4 w-3/4 rounded-lg border border-solid border-black">
        <caption>Événements à venir</caption>
        <thead>
          <tr className="flex rounded-t-lg bg-gray-700 p-4 text-white">
            <th className="w-1/3 text-center">Événement</th>
            <th className="w-1/3 text-center">Lieu</th>
            <th className="w-1/3 text-center">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="flex border-t border-solid border-black bg-gray-200 p-4">
            <td className="w-1/3 text-center">
              Atelier sur l’accessibilité web
            </td>
            <td className="w-1/3 text-center">Centre de conférences local</td>
            <td className="w-1/3 text-center">15 mars 2024</td>
          </tr>

          <tr className="flex border-t border-solid border-black bg-gray-500 p-4 text-white">
            <td className="w-1/3 text-center">
              Conférence sur les tendances du développement web
            </td>
            <td className="w-1/3 text-center">Bibliothèque communautaire</td>
            <td className="w-1/3 text-center">5 avril 2024</td>
          </tr>

          <tr className="flex border-t border-solid border-black bg-gray-200 p-4">
            <td className="w-1/3 text-center">
              Formation sur les bonnes pratiques en matière d’accessibilité
            </td>
            <td className="w-1/3 text-center">Espace de coworking</td>
            <td className="w-1/3 text-center">20 mai 2024</td>
          </tr>

          <tr className="flex rounded-b-lg border-t border-solid border-black bg-gray-500 p-4 text-white">
            <td className="w-1/3 text-center">
              Table ronde sur l’avenir du développement web
            </td>
            <td className="w-1/3 text-center">Campus universitaire</td>
            <td className="w-1/3 text-center">10 juin 2024</td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
};
