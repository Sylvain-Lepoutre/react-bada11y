import { useForm, valiForm, type SubmitHandler } from "@modular-forms/react";
import { email, minLength, object, string, type Input } from "valibot";

const LevelAFormSchema = object({
  lastname: string("Veuillez indiquer votre nom", [
    minLength(1, "Veuillez indiquer votre nom"),
  ]),
  firstname: string("Veuillez indiquer votre prénom.", [
    minLength(1, "Veuillez indiquer votre prénom"),
  ]),
  email: string("Veuillez indiquer votre email", [
    minLength(2, "Veuillez indiquer votre email."),
    email("L’adresse email n'est pas valide"),
  ]),
  job: string("Veuillez indiquer votre poste", [
    minLength(1, "Veuillez indiquer votre poste"),
  ]),
  password: string("Veuillez indiquer votre mot de pass", [
    minLength(8, "Le mot de passe doit comporter 8 caractères"),
  ]),
});

type LevelAForm = Input<typeof LevelAFormSchema>;

export const AForm = () => {
  const [levelAForm, { Form, Field }] = useForm<LevelAForm>({
    validate: valiForm(LevelAFormSchema),
  });

  const handleSubmit: SubmitHandler<LevelAForm> = (values) => {
    console.log(values);
  };

  return (
    <Form
      className="mx-auto my-4 w-3/4 rounded-xl bg-gray-500 p-4"
      onSubmit={handleSubmit}
    >
      <div className="m-4 flex flex-col">
        <label htmlFor="lastname">Nom</label>

        <Field name="lastname">
          {(field, props) => (
            <>
              <input
                aria-describedby="lastname-error"
                // aria-errormessage="lastname-error"
                aria-invalid={field.error.value !== ""}
                className="rounded-lg px-2"
                id="lastname"
                required
                type="text"
                {...props}
              />
              <div id="lastname-error">{field.error.value}</div>
            </>
          )}
        </Field>
      </div>

      <div className="m-4 flex flex-col">
        <label htmlFor="firstname">Prénom</label>

        <Field name="firstname">
          {(field, props) => (
            <>
              <input
                className="rounded-lg px-2"
                id="firstname"
                required
                type="text"
                {...props}
              />
              {field.error && <div id="firstname-error">{field.error}</div>}
            </>
          )}
        </Field>
      </div>

      <div className="m-4 flex flex-col">
        <label htmlFor="email">Email</label>

        <Field name="email">
          {(field, props) => (
            <>
              <input
                className="rounded-lg px-2"
                id="email"
                required
                type="email"
                {...props}
              />
              {field.error && <div id="email-error">{field.error}</div>}
            </>
          )}
        </Field>
      </div>

      <div className="m-4 flex flex-col">
        <label htmlFor="job">Vous êtes ?</label>
        <Field name="job">
          {(field, props) => (
            <>
              <select id="job" required {...props}>
                <option value="developer">Développeur</option>
                <option value="student">Étudiant</option>
                <option value="other">Autre</option>
              </select>
              {field.error && <div id="job-error">{field.error}</div>}
            </>
          )}
        </Field>
      </div>

      <div className="m-4 flex flex-col">
        <label htmlFor="password">Mot de passe</label>

        <Field name="password">
          {(field, props) => (
            <>
              <input
                className="rounded-lg px-2"
                id="password"
                type="password"
                {...props}
              />
              {field.error && <div id="password-error">{field.error}</div>}
            </>
          )}
        </Field>
      </div>

      <button
        className="mx-auto block rounded-lg bg-gray-700 p-2 text-white"
        type="submit"
      >
        Valider
      </button>
    </Form>
  );
};

//     <form className="mx-auto my-4 w-3/4 rounded-xl bg-gray-500 p-4">
//       <div className="flex flex-col text-center">
//         Inscription
//         <span className="text-sm">(tous les champs sont obligatoires)</span>
//       </div>

//       <div className="m-4 flex flex-col">
//         <label htmlFor="lastname">Nom</label>
//         <input
//           className="rounded-lg px-2"
//           data-testid="lastname"
//           id="lastname"
//           name="lastname"
//           type="text"
//         />
//       </div>

//       <div className="m-4 flex flex-col">
//         <label htmlFor="firstname">Prénom</label>
//         <input
//           className="rounded-lg px-2"
//           data-testid="firstname"
//           id="fisrtname"
//           name="firstname"
//           type="text"
//         />
//       </div>

//       <div className="m-4 flex flex-col">
//         <label htmlFor="job">Vous êtes ?</label>
//         <select id="job" name="role">
//           <option value="developer">Développeur</option>
//           <option value="student">Étudiant</option>
//           <option value="other">Autre</option>
//         </select>
//       </div>

//       <div className="m-4 flex flex-col">
//         <label htmlFor="email">E-mail</label>
//         <input
//           className="rounded-lg px-2"
//           id="email"
//           name="email"
//           type="email"
//         />
//       </div>

//       <div className="m-4 flex flex-col">
//         <label htmlFor="password">Mot de passe</label>
//         <input
//           className="rounded-lg px-2"
//           id="password"
//           name="password"
//           type="password"
//         />
//       </div>

//     <input
//         className="mx-auto block rounded-lg bg-gray-700 p-2 text-white"
//         type="submit"
//         value="Soumettre l'inscription"
//       />
//  </form>
