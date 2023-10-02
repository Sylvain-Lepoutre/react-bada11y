import { createBrowserRouter } from "react-router-dom";

import { personas } from "./data/personas";
import { PersonaHome } from "./routes/personaHome";
import { PersonaStep1 } from "./routes/personaStep1";
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
        personaId={personas[0].id}
        personaIntro={personas[0].intro}
        personaName={personas[0].name}
      />
    ),
  },
  {
    path: "/persona1/step1",
    element: (
      <PersonaStep1
        personaName={personas[0].name}
        personaStep1Title={personas[0].step1Title}
      />
    ),
  },
  {
    path: "/persona2",
    element: (
      <PersonaHome
        personaId={personas[1].id}
        personaIntro={personas[1].intro}
        personaName={personas[1].name}
      />
    ),
  },
  {
    path: "/persona2/step1",
    element: (
      <PersonaStep1
        personaName={personas[1].name}
        personaStep1Title={personas[1].step1Title}
      />
    ),
  },
  {
    path: "/persona3",
    element: (
      <PersonaHome
        personaId={personas[2].id}
        personaIntro={personas[2].intro}
        personaName={personas[2].name}
      />
    ),
  },
  {
    path: "/persona4",
    element: (
      <PersonaHome
        personaId={personas[3].id}
        personaIntro={personas[3].intro}
        personaName={personas[3].name}
      />
    ),
  },
]);
