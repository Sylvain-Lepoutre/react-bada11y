import { useId } from "react";

import { Heading2 } from "../../../UI/headings/Heading2";
import { Section } from "../../../UI/sections/Section";

export const A11yTest = () => {
  const id = useId();

  return (
    <Section aria-labelledby={id}>
      <Heading2 id={id}>Affichage dans le navigateur</Heading2>

      <div>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi aperiam
          eum, saepe delectus autem veritatis perspiciatis fuga dicta nemo
          sapiente quaerat incidunt deleniti reprehenderit, ducimus, officiis
          amet. Sed, vero vitae.
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
          ratione sit aspernatur voluptatum maxime. Officiis eaque optio quam
          illo, asperiores, est nemo vel assumenda nisi fugit non dolore eveniet
          amet!
        </p>

        <h3>Lorem ipsum dolor sit amet consectetur.</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          necessitatibus, nihil architecto voluptatem dolor omnis quidem
          voluptas iure dignissimos esse explicabo quisquam placeat eaque quod
          doloremque vitae ipsa itaque unde!
        </p>
      </div>
    </Section>
  );
};
