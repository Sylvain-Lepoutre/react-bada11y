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
      <div className="flex flex-col text-center">
        Inscription
        <span className="text-sm">(tous les champs sont obligatoires)</span>
      </div>

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

              <div
                className="mx-auto my-2 rounded-lg bg-red-800 px-2 text-white"
                id="lastname-error"
              >
                {field.error.value}
              </div>
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
                aria-describedby="firstname-error"
                // aria-errormessage="firstname-error"
                aria-invalid={field.error.value !== ""}
                className="rounded-lg px-2"
                id="firstname"
                required
                type="text"
                {...props}
              />

              <div
                className="mx-auto my-2 rounded-lg bg-red-800 px-2 text-white"
                id="firstname-error"
              >
                {field.error}
              </div>
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
                aria-describedby="email-error"
                aria-invalid={field.error.value !== ""}
                className="rounded-lg px-2"
                id="email"
                required
                type="email"
                {...props}
              />
              <div
                className="mx-auto my-2 rounded-lg bg-red-800 px-2 text-white"
                id="email-error"
              >
                {field.error}
              </div>
            </>
          )}
        </Field>
      </div>

      <div className="m-4 flex flex-col">
        <label htmlFor="job">Vous êtes ?</label>
        <Field name="job">
          {(field, props) => (
            <>
              <select className="rounded-lg p-1" id="job" required {...props}>
                <option value="developer">Développeur</option>
                <option value="student">Étudiant</option>
                <option value="other">Autre</option>
              </select>
              <div
                className="mx-auto my-2 rounded-lg bg-red-800 px-2 text-white"
                id="job-error"
              >
                {field.error}
              </div>
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
                aria-describedby="password-error"
                aria-invalid={field.error.value !== ""}
                className="rounded-lg px-2"
                id="password"
                required
                type="password"
                {...props}
              />
              <div
                className="mx-auto my-2 rounded-lg bg-red-800 px-2 text-white"
                id="password-error"
              >
                {field.error}
              </div>
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
