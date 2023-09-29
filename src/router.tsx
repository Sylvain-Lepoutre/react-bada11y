import { createBrowserRouter } from "react-router-dom";

import { personas } from "./data/personas";
import { Persona1Step1 } from "./routes/persona1Step1";
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
    path: "/persona1/step1",
    element: <Persona1Step1 personaName={personas[0].name} />,
  },
  {
    path: "/persona2",
    element: (
      <PersonaHome
        personaIntro={personas[1].intro}
        personaName={personas[1].name}
      />
    ),
  },
  {
    path: "/persona3",
    element: (
      <PersonaHome
        personaIntro={personas[2].intro}
        personaName={personas[2].name}
      />
    ),
  },
  {
    path: "/persona4",
    element: (
      <PersonaHome
        personaIntro={personas[3].intro}
        personaName={personas[3].name}
      />
    ),
  },
]);
