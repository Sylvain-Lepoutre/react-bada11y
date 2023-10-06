import { createBrowserRouter } from "react-router-dom";

import { personas } from "./data/personas";
import { PersonaHome } from "./routes/personaHome";
import { PersonaStep1 } from "./routes/personaStep1";
import { PersonaStep2 } from "./routes/personaStep2";
import { PersonaStep3 } from "./routes/personaStep3";
import { Root } from "./routes/root";
import { Wip } from "./routes/wip";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Wip />,
  },
  {
    path: "/wip",
    element: <Wip />,
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
        personaId={personas[0].id}
        personaName={personas[0].name}
        personaStep1Title={personas[0].step1Title}
      />
    ),
  },
  {
    path: "/persona1/step2",
    element: (
      <PersonaStep2
        personaId={personas[0].id}
        personaName={personas[0].name}
        personaStep2Title={personas[0].step2Title}
      />
    ),
  },
  {
    path: "/persona1/step3",
    element: (
      <PersonaStep3
        personaId={personas[0].id}
        personaName={personas[0].name}
        personaStep3Title={personas[0].step3Title}
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
        personaId={personas[1].id}
        personaName={personas[1].name}
        personaStep1Title={personas[1].step1Title}
      />
    ),
  },
  {
    path: "/persona2/step2",
    element: (
      <PersonaStep2
        personaId={personas[1].id}
        personaName={personas[1].name}
        personaStep2Title={personas[1].step2Title}
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
