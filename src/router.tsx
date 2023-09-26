import { createBrowserRouter } from "react-router-dom";

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
        personaDesc="
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt eget lacus ac malesuada. In egestas ex non tincidunt vestibulum. Mauris nec orci at est lacinia scelerisque. Integer condimentum nulla in lorem auctor faucibus. Vestibulum dui tellus, imperdiet a odio sit amet, commodo scelerisque tellus. Praesent ut justo imperdiet, porta elit vitae, posuere ex. Nulla et tincidunt nunc."
        personaName="Djebrine"
      />
    ),
  },
  {
    path: "/persona2",
    element: (
      <PersonaHome
        personaDesc="
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt eget lacus ac malesuada. In egestas ex non tincidunt vestibulum. Mauris nec orci at est lacinia scelerisque. Integer condimentum nulla in lorem auctor faucibus. Vestibulum dui tellus, imperdiet a odio sit amet, commodo scelerisque tellus. Praesent ut justo imperdiet, porta elit vitae, posuere ex. Nulla et tincidunt nunc."
        personaName="Sophie"
      />
    ),
  },
  {
    path: "/persona3",
    element: (
      <PersonaHome
        personaDesc="
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt eget lacus ac malesuada. In egestas ex non tincidunt vestibulum. Mauris nec orci at est lacinia scelerisque. Integer condimentum nulla in lorem auctor faucibus. Vestibulum dui tellus, imperdiet a odio sit amet, commodo scelerisque tellus. Praesent ut justo imperdiet, porta elit vitae, posuere ex. Nulla et tincidunt nunc."
        personaName="Amine"
      />
    ),
  },
  {
    path: "/persona4",
    element: (
      <PersonaHome
        personaDesc="
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt eget lacus ac malesuada. In egestas ex non tincidunt vestibulum. Mauris nec orci at est lacinia scelerisque. Integer condimentum nulla in lorem auctor faucibus. Vestibulum dui tellus, imperdiet a odio sit amet, commodo scelerisque tellus. Praesent ut justo imperdiet, porta elit vitae, posuere ex. Nulla et tincidunt nunc."
        personaName="Claire"
      />
    ),
  },
]);
