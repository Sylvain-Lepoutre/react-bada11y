import { sectionStyles } from "./root";

type Props = { personaName: string; personaDesc: string };

export const PersonaHome = ({ personaName, personaDesc }: Props) => {
  return (
    <>
      <header
        className="mx-auto my-4 w-9/12 rounded-2xl bg-white p-4 shadow-Custom"
        role="banner"
      >
        <h1 className="text-center text-4xl">{personaName}</h1>
      </header>

      <main className="mx-auto my-12 w-11/12 ">
        <section className={sectionStyles}>
          <p>{personaDesc}</p>
        </section>
      </main>
    </>
  );
};
