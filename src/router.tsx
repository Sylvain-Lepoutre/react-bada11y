import { createBrowserRouter } from "react-router-dom";

import { Test } from "./routes/test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero fuga
        repellat ratione sint dolore hic incidunt earum similique, eligendi,
        vitae iusto molestiae modi, nisi voluptate consequuntur doloribus ipsum
        possimus mollitia. Sint, tenetur dolor provident expedita eligendi, nemo
        debitis aliquid consectetur accusamus praesentium laborum, autem earum.
        Ipsam dolor aspernatur accusantium voluptate et esse dicta repellendus
        consequuntur enim, nostrum non ab officiis. Architecto perferendis atque
        odio aspernatur nostrum dolorem mollitia culpa a! Repellendus, facere
        accusamus facilis quos sequi dicta ea temporibus totam, veniam tempore,
        neque eius amet magnam quasi quae. Deserunt, veniam! Nihil repudiandae
        quas tempora porro eos vero pariatur minima, perspiciatis hic itaque
        corrupti corporis omnis et reiciendis eligendi quisquam, molestias
        praesentium reprehenderit voluptatem voluptate. Distinctio quaerat error
        dignissimos cumque quia? Deserunt in sunt dicta repudiandae deleniti
        iusto exercitationem sit repellendus aut magni mollitia id, unde dolorum
        ut hic, obcaecati rem explicabo voluptate sed nemo cupiditate expedita
        labore? Inventore, numquam amet!
      </p>
    ),
  },
  {
    path: "/test",
    element: <Test />,
  },
]);
