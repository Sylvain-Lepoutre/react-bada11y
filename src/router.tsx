import { createBrowserRouter } from "react-router-dom";

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
    element: <h1>Djebrine</h1>,
  },
  {
    path: "/persona2",
    element: <h1>Sophie</h1>,
  },
  {
    path: "/persona3",
    element: <h1>Amine</h1>,
  },
  {
    path: "/persona4",
    element: <h1>Claire</h1>,
  },
]);
