import { createBrowserRouter } from "react-router-dom";

import { personas } from "./data/personas";
import { PersonaHome } from "./routes/personaHome";
import { Root } from "./routes/root";
import { Test } from "./routes/test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/persona1",
    element: (
      <PersonaHome
        personaIntro={personas[0].intro}
        personaName={personas[0].name}
      />
    ),
  },
  {
    path: "/persona2",
    element: (
      <PersonaHome
        personaDesc="
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt eget lacus ac malesuada. In egestas ex non tincidunt vestibulum. Mauris nec orci at est lacinia scelerisque. Integer condimentum nulla in lorem auctor faucibus. Vestibulum dui tellus, imperdiet a odio sit amet, commodo scelerisque tellus. Praesent ut justo imperdiet, porta elit vitae, posuere ex. Nulla et tincidunt nunc."
        personaIntro={personas[1].intro}
        personaName={personas[1].name}
      />
    ),
  },
  {
    path: "/persona3",
    element: (
      <PersonaHome
        personaDesc="
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt eget lacus ac malesuada. In egestas ex non tincidunt vestibulum. Mauris nec orci at est lacinia scelerisque. Integer condimentum nulla in lorem auctor faucibus. Vestibulum dui tellus, imperdiet a odio sit amet, commodo scelerisque tellus. Praesent ut justo imperdiet, porta elit vitae, posuere ex. Nulla et tincidunt nunc."
        personaIntro={personas[2].intro}
        personaName={personas[2].name}
      />
    ),
  },
  {
    path: "/persona4",
    element: (
      <PersonaHome
        personaDesc="
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt eget lacus ac malesuada. In egestas ex non tincidunt vestibulum. Mauris nec orci at est lacinia scelerisque. Integer condimentum nulla in lorem auctor faucibus. Vestibulum dui tellus, imperdiet a odio sit amet, commodo scelerisque tellus. Praesent ut justo imperdiet, porta elit vitae, posuere ex. Nulla et tincidunt nunc."
        personaIntro={personas[3].intro}
        personaName={personas[3].name}
      />
    ),
  },
]);
