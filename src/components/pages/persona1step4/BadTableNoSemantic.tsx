import { Heading2 } from "../../UI/headings/Heading2";
import { Section } from "../../UI/sections/Section";

export const BadTableNoSemantic = () => {
  return (
    <Section>
      <Heading2>Affichage dans le navigateur</Heading2>
      <div className="mx-auto my-4 w-3/4 rounded-lg border border-solid border-black">
        <div className="flex rounded-t-lg bg-gray-700 p-4 text-white">
          <div className="my-auto w-1/3 text-center">Évènement</div>
          <div className="my-auto w-1/3 text-center">Lieu</div>
          <div className="my-auto w-1/3 text-center">Date</div>
        </div>

        <div className="flex border-t border-solid border-black bg-gray-200 p-4">
          <div className="my-auto w-1/3 text-center">
            Atelier sur l’accessibilité web
          </div>
          <div className="my-auto w-1/3 text-center">
            Centre de conférences local
          </div>
          <div className="my-auto w-1/3 text-center">15 mars 2024</div>
        </div>

        <div className="flex border-t border-solid border-black bg-gray-500 p-4 text-white">
          <div className="my-auto w-1/3 text-center">
            Conférence sur les tendances du développement web
          </div>
          <div className="my-auto w-1/3 text-center">
            Bibliothèque communautaire
          </div>
          <div className="my-auto w-1/3 text-center">5 avril 2024</div>
        </div>

        <div className="flex border-t border-solid border-black bg-gray-200 p-4">
          <div className="my-auto w-1/3 text-center">
            Formation sur les bonnes pratiques en matière d’accessibilité
          </div>
          <div className="my-auto w-1/3 text-center">Espace de coworking</div>
          <div className="my-auto w-1/3 text-center">20 mai 2024</div>
        </div>

        <div className="flex rounded-b-lg border-t border-solid border-black bg-gray-500 p-4 text-white">
          <div className="my-auto w-1/3 text-center">
            Table ronde sur l’avenir du développement web
          </div>
          <div className="my-auto w-1/3 text-center">Campus universitaire</div>
          <div className="my-auto w-1/3 text-center">10 juin 2024</div>
        </div>
      </div>
    </Section>
  );
};
