import { Heading2 } from "../../UI/headings/Heading2";
import { Section } from "../../UI/sections/Section";

export const BadTableNoAttribute = () => {
  return (
    <Section>
      <Heading2>Affichage dans le navigateur</Heading2>
      <table className="mx-auto my-4 w-3/4 border-solid border-black">
        <caption>Évènement à venir</caption>

        <tr className="flex rounded-t-lg bg-gray-800 p-4 text-white">
          <td className="my-auto w-1/3 text-center">Évènement</td>
          <td className="my-auto w-1/3 text-center">Lieu</td>
          <td className="my-auto w-1/3 text-center">Date</td>
        </tr>

        <tr className="flex border-t border-solid border-black bg-gray-200 p-4">
          <td className="my-auto w-1/3 text-center">
            Atelier sur l’accessibilité web
          </td>
          <td className="my-auto w-1/3 text-center">
            Centre de conférences local
          </td>
          <td className="my-auto w-1/3 text-center">15 mars 2024</td>
        </tr>

        <tr className="flex border-t border-solid border-black bg-gray-600 p-4 text-white">
          <td className="my-auto w-1/3 text-center">
            Conférence sur les tendances du développement web
          </td>
          <td className="my-auto w-1/3 text-center">
            Bibliothèque communautaire
          </td>
          <td className="my-auto w-1/3 text-center">5 avril 2024</td>
        </tr>

        <tr className="flex border-t border-solid border-black bg-gray-200 p-4">
          <td className="my-auto w-1/3 text-center">
            Formation sur les bonnes pratiques en matière d’accessibilité
          </td>
          <td className="my-auto w-1/3 text-center">Espace de coworking</td>
          <td className="my-auto w-1/3 text-center">20 mai 2024</td>
        </tr>

        <tr className="flex rounded-b-lg border-t border-solid border-black bg-gray-600 p-4 text-white">
          <td className="my-auto w-1/3 text-center">
            Table ronde sur l’avenir du développement web
          </td>
          <td className="my-auto w-1/3 text-center">Campus universitaire</td>
          <td className="my-auto w-1/3 text-center">10 juin 2024</td>
        </tr>
      </table>
    </Section>
  );
};
