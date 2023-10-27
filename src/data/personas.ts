type Page = {
  id: number;
  name: string;
  url: string;
};

export type Step = {
  id: number;
  name: string;
  pages: Page[];
};

type Persona = {
  id: number;
  name: string;
  cardTitle: string;
  imgSrc: string;
  personaHomeUrl: string;
  intro: string;
  steps: Step[];
};

export const personas: Persona[] = [
  {
    id: 1,
    name: "Djebrine",
    cardTitle: "Djebrine, 33 ans, entrepreneur, trouble visuel",
    imgSrc: "https://placehold.co/128x128/png",
    personaHomeUrl: "/persona/1",
    intro:
      "Djebrine est un entrepreneur dynamique de 33 ans. Il est non-voyant. Chaque matin, il s’installe devant son ordinateur, équipé d’un lecteur d’écran et d’un afficheur braille. Le lecteur d’écran est un logiciel doté d’un synthétiseur vocal qui récupere l’information textuelle et la retranscrit vocalement et en braille pour Djebrine. Il traite autant le texte saisi au clavier que le contenu de l'écran (menus, boîtes de dialogue, texte des documents, pages Internet…). Ces outils technologiques lui servent de pont entre son monde sans vision et le monde numérique.",
    steps: [
      {
        id: 1,
        name: "Formulaire",
        pages: [
          { id: 1, name: "Formulaire non accessible", url: "/persona1/form/1" },
          { id: 2, name: "Formulaire accessible", url: "/persona1/form/2" },
        ],
      },
      {
        id: 2,
        name: "Tableau",
        pages: [
          { id: 1, name: "Tableau non accessible", url: "/persona1/table/1" },
          { id: 2, name: "Tableau accessible", url: "/persona1/table/2" },
        ],
      },
      {
        id: 3,
        name: "Navigation",
        pages: [
          { id: 1, name: "Navigation non accessible", url: "/persona1/nav/1" },
          { id: 2, name: "Navigation accessible", url: "/persona1/nav/2" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Sophie",
    cardTitle: "Sophie, 42 ans, comptable, trouble moteur",
    imgSrc: "https://placehold.co/128x128/png",
    personaHomeUrl: "/persona/2",
    intro:
      "Sophie est une comptable de 42 ans. Elle lutte contre de sévères troubles musculo-squelettiques. Ses douleurs l'empeche d'utiliser une souris, elle navigue à l'aide du clavier.",
    steps: [
      {
        id: 1,
        name: "Shopping",
        pages: [
          {
            id: 1,
            name: "Shopping non accessible",
            url: "/persona2/shopping/1",
          },
          { id: 2, name: "Shopping accessible", url: "/persona2/shopping/2" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Amine",
    cardTitle: "Amine, 23 ans, étudiant, trouble auditif",
    imgSrc: "https://placehold.co/128x128/png",
    personaHomeUrl: "/persona/3",
    intro:
      "Amine est un jeune homme de 23 ans, étudiant en Master dans ce domaine. Il est sourd depuis l'âge d'un an à la suite d'une méningite. Il aime regarder des films en ligne, cependant les sous-titres ne sont pas toujours présents ou sont mal syncrhonisés, voire incomplets, cela rend son expérience frustrante et désagréable.",
    steps: [
      {
        id: 1,
        name: "WIP",
        pages: [{ id: 1, name: "WIP", url: "/persona3/wip" }],
      },
    ],
  },
  {
    id: 4,
    name: "Claire",
    cardTitle: "Claire, 30 ans, professeur, trouble cognitif",
    imgSrc: "https://placehold.co/128x128/png",
    personaHomeUrl: "/persona/4",
    intro:
      "Claire est une professeure de yoga de 33 ans. Elle est dyslexique et a un trouble du déficit de l'attention avec hyperactivité. Elle s’épanouit par le yoga, mais le monde numérique reste un défi pour elle. Sa dyslexie la rend réticente face aux textes long, et elle a du mal à maintenir sa concentraion.",
    steps: [
      {
        id: 1,
        name: "Texte long",
        pages: [
          { id: 1, name: "Texte long non accessible", url: "/persona4/text/1" },
          { id: 2, name: "Texte long accessible", url: "/persona4/text/2" },
        ],
      },
      {
        id: 2,
        name: "Polices de caractères",
        pages: [
          {
            id: 1,
            name: "Polices de caractères non accessibles",
            url: "/persona4/font/1",
          },
          {
            id: 2,
            name: "Polices de caractères accessibles",
            url: "/persona4/font/2",
          },
        ],
      },
    ],
  },
];
