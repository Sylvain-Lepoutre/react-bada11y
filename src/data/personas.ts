type Persona = {
  id: number;
  name: string;
  cardTitle: string;
  imgSrc: string;
  linkURL: string;
  intro: string;
  step1Title: string;
  step2Title: string;
  step3Title: string;
  step4Title: string;
  step5Title: string;
};

export const personas: Persona[] = [
  {
    id: 1,
    name: "Djebrine",
    cardTitle: "Djebrine, 33 ans, entrepreneur, trouble visuel",
    imgSrc: "https://placehold.co/128x128/png",
    linkURL: "/persona1",
    intro:
      "Djebrine est un entrepreneur dynamique de 33 ans. Il est non-voyant. Chaque matin, il s’installe devant son ordinateur, équipé d’un lecteur d’écran et d’un afficheur braille. Le lecteur d’écran est un logiciel doté d’un synthétiseur vocal qui récupere l’information textuelle et la retranscrit vocalement et en braille pour Djebrine. Il traite autant le texte saisi au clavier que le contenu de l'écran (menus, boîtes de dialogue, texte des documents, pages Internet…). Ces outils technologiques lui servent de pont entre son monde sans vision et le monde numérique.",
    step1Title: "Etape 1 : Formulaire d'inscription non sémantique",
    step2Title: "Etape 2 : Formulaire d'inscription accessible",
    step3Title: "Work In Progress",
    step4Title: "Etape 4 : Tableau d'évènement non sémantique",
    step5Title: "Etape 5: Tableau d'évènement sans attribut",
  },
  {
    id: 2,
    name: "Sophie",
    cardTitle: "Sophie, 42 ans, comptable, trouble moteur",
    imgSrc: "https://placehold.co/128x128/png",
    linkURL: "/persona2",
    intro:
      "Sophie est une comptable de 42 ans. Elle lutte contre de sévères troubles musculo-squelettiques. Ses douleurs l'empeche d'utiliser une souris, elle navigue à l'aide du clavier.",
    step1Title: "Etape 1 : Shopping en Ligne",
    step2Title: "Etape 2 : Shopping en Ligne accessible",
    step3Title: "Work In Progress",
    step4Title: "Work In Progress",
    step5Title: "Work In Progress",
  },
  {
    id: 3,
    name: "Amine",
    cardTitle: "Amine, 23 ans, étudiant, trouble auditif",
    imgSrc: "https://placehold.co/128x128/png",
    linkURL: "/persona3",
    intro:
      "Amine est un jeune homme de 23 ans, étudiant en Master dans ce domaine. Il est sourd depuis l'âge d'un an à la suite d'une méningite. Il aime regarder des films en ligne, cependant les sous-titres ne sont pas toujours présents ou sont mal syncrhonisés, voire incomplets, cela rend son expérience frustrante et désagréable.",
    step1Title: "Etape 1 : Work In Progress",
    step2Title: "Work In Progress",
    step3Title: "Work In Progress",
    step4Title: "Work In Progress",
    step5Title: "Work In Progress",
  },
  {
    id: 4,
    name: "Claire",
    cardTitle: "Claire, 30 ans, professeur, trouble cognitif",
    imgSrc: "https://placehold.co/128x128/png",
    linkURL: "/persona4",
    intro:
      "Claire est une professeure de yoga de 33 ans. Elle est dyslexique et a un trouble du déficit de l'attention avec hyperactivité. Elle sépanouit par le yoga, mais le monde numérique reste un défi pour elle. Sa dyslexie la rend réticente face aux textes long, et elle a du mal à maintenir sa concentraion.",
    step1Title: "Etape 1 : Work In Progress",
    step2Title: "Work In Progress",
    step3Title: "Work In Progress",
    step4Title: "Work In Progress",
    step5Title: "Work In Progress",
  },
];
