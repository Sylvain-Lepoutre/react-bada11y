import { createBrowserRouter } from "react-router-dom";

import { personas } from "./data/personas";
import { Persona1Form1 } from "./routes/persona1Form1";
import { Persona1Form2 } from "./routes/persona1Form2";
import { Persona1Table1 } from "./routes/persona1Table1";
import { Persona1Table2 } from "./routes/persona1Table2";
import { Persona2Shopping1 } from "./routes/persona2Shopping1";
import { Persona2Shopping2 } from "./routes/persona2Shopping2";
import { PersonaHome } from "./routes/personaHome";
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
    path: `${personas[0].personaHomeUrl}`,
    element: (
      <PersonaHome
        personaId={personas[0].id}
        personaIntro={personas[0].intro}
        personaName={personas[0].name}
        personaSteps={personas[0].steps}
      />
    ),
  },
  {
    path: `${personas[0].steps[0].pages[0].url}`,
    element: (
      <Persona1Form1
        componentName={personas[0].steps[0].pages[0].name}
        nextUrl={personas[0].steps[0].pages[1].url}
        personaHomeUrl={personas[0].personaHomeUrl}
        personaName={personas[0].name}
      />
    ),
  },
  {
    path: `${personas[0].steps[0].pages[1].url}`,
    element: (
      <Persona1Form2
        componentName={personas[0].steps[0].pages[1].name}
        personaHomeUrl={personas[0].personaHomeUrl}
        personaName={personas[0].name}
      />
    ),
  },
  {
    path: `${personas[0].steps[1].pages[0].url}`,
    element: (
      <Persona1Table1
        componentName={personas[0].steps[1].pages[0].name}
        nextUrl={personas[0].steps[1].pages[1].url}
        personaHomeUrl={personas[0].personaHomeUrl}
        personaName={personas[0].name}
      />
    ),
  },
  {
    path: `${personas[0].steps[1].pages[1].url}`,
    element: (
      <Persona1Table2
        componentName={personas[0].steps[1].pages[1].name}
        personaHomeUrl={personas[0].personaHomeUrl}
        personaName={personas[0].name}
      />
    ),
  },
  {
    path: `${personas[1].personaHomeUrl}`,
    element: (
      <PersonaHome
        personaId={personas[1].id}
        personaIntro={personas[1].intro}
        personaName={personas[1].name}
        personaSteps={personas[1].steps}
      />
    ),
  },
  {
    path: `${personas[1].steps[0].pages[0].url}`,
    element: (
      <Persona2Shopping1
        componentName={personas[1].steps[0].pages[0].name}
        nextUrl={personas[1].steps[0].pages[1].url}
        personaHomeUrl={personas[1].personaHomeUrl}
        personaName={personas[1].name}
      />
    ),
  },
  {
    path: `${personas[1].steps[0].pages[1].url}`,
    element: (
      <Persona2Shopping2
        componentName={personas[1].steps[0].pages[1].name}
        personaHomeUrl={personas[1].personaHomeUrl}
        personaName={personas[1].name}
      />
    ),
  },
  // {
  //   path: "/persona2/step1",
  //   element: (
  //     <PersonaStep1
  //       personaId={personas[1].id}
  //       personaName={personas[1].name}
  //       personaStep1Title={personas[1].step1Title}
  //     />
  //   ),
  // },
  // {
  //   path: "/persona2/step2",
  //   element: (
  //     <PersonaStep2
  //       personaId={personas[1].id}
  //       personaName={personas[1].name}
  //       personaStep2Title={personas[1].step2Title}
  //     />
  //   ),
  // },
  // {
  //   path: "/persona3",
  //   element: (
  //     <PersonaHome
  //       personaId={personas[2].id}
  //       personaIntro={personas[2].intro}
  //       personaName={personas[2].name}
  //     />
  //   ),
  // },
  // {
  //   path: "/persona4",
  //   element: (
  //     <PersonaHome
  //       personaId={personas[3].id}
  //       personaIntro={personas[3].intro}
  //       personaName={personas[3].name}
  //     />
  //   ),
  // },
]);
