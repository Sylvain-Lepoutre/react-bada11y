type Persona = {
  id: number;
  name: string;
  cardTitle: string;
  imgSrc: string;
  linkURL: string;
};

export const personas: Persona[] = [
  {
    id: 1,
    name: "Djebrine",
    cardTitle: "Djebrine, 33 ans, entrepreneur, trouble visuel",
    imgSrc: "https://placehold.co/128x128/png",
    linkURL: "/persona1",
  },
  {
    id: 2,
    name: "Sophie",
    cardTitle: "Sophie, 42 ans, comptable, trouble moteur",
    imgSrc: "https://placehold.co/128x128/png",
    linkURL: "/persona2",
  },
  {
    id: 3,
    name: "Amine",
    cardTitle: "Amine, 23 ans, étudiant, trouble auditif",
    imgSrc: "https://placehold.co/128x128/png",
    linkURL: "/persona3",
  },
  {
    id: 4,
    name: "Claire",
    cardTitle: "Claire, 30 ans, professeur, trouble cognitif",
    imgSrc: "https://placehold.co/128x128/png",
    linkURL: "/persona4",
  },
];
