import { useId } from "react";

import { Heading2 } from "../../../UI/headings/Heading2";
import { Section } from "../../../UI/sections/Section";

export const A11yText = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Affichage dans le navigateur</Heading2>

      <div className="mx-auto w-4/5">
        <h3 className="my-4 text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h3>

        <p className="leading-7">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi aperiam
          eum, saepe delectus autem veritatis perspiciatis fuga dicta nemo
          sapiente quaerat incidunt deleniti reprehenderit, ducimus, officiis
          amet. Sed, vero vitae.
        </p>

        <p className="leading-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
          ratione sit aspernatur voluptatum maxime. Officiis eaque optio quam
          illo, asperiores, est nemo vel assumenda nisi fugit non dolore eveniet
          amet!
        </p>

        <h3 className="my-4 text-2xl">
          Lorem ipsum dolor sit amet consectetur.
        </h3>

        <p className="leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          necessitatibus, nihil architecto voluptatem dolor omnis quidem
          voluptas iure dignissimos esse explicabo quisquam placeat eaque quod
          doloremque vitae ipsa itaque unde!
        </p>

        <h3 className="my-4 text-2xl">
          Lorem ipsum dolor sit amet consectetur.
        </h3>

        <p className="leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          necessitatibus, nihil architecto voluptatem dolor omnis quidem
          voluptas iure dignissimos esse explicabo quisquam placeat eaque quod
          doloremque vitae ipsa itaque unde! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Maxime voluptatum saepe voluptatem, modi
          rerum quis? Nam earum illum quibusdam harum tempora porro incidunt
          nisi voluptas officiis, hic, tenetur doloremque temporibus! Commodi
          tempore aliquid, a nobis consectetur officia, ab magni quis nesciunt
          deserunt quo qui esse repellat iste. Autem, odio. Laudantium a
          pariatur perspiciatis? Quas molestiae officia quo? Eveniet, natus
          laudantium! Nesciunt velit eos porro iusto ratione veniam repellat
          voluptate delectus facilis suscipit ex, culpa et animi qui doloremque
          error hic labore ipsum adipisci non debitis autem soluta sint
          repudiandae! Possimus! Debitis libero fugit odio minus consequuntur
          sequi fuga, quae vel dolorem earum dicta, maiores id blanditiis eaque
          possimus nostrum pariatur sed error quaerat reprehenderit ratione
          voluptas. Eligendi repellat iste odio? Totam, ea aperiam veritatis id
          aut fugiat soluta cumque omnis. Aliquid optio ipsa amet saepe
          similique ea ex suscipit dicta, nisi deserunt animi placeat,
          blanditiis quisquam facere in cum? Animi!
        </p>

        <p className="leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          necessitatibus, nihil architecto voluptatem dolor omnis quidem
          voluptas iure dignissimos esse explicabo quisquam placeat eaque quod
          doloremque vitae ipsa itaque unde!
        </p>
      </div>
    </Section>
  );
};
