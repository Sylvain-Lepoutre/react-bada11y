import { BadFormNoSemantic, BadFormSemantic } from "../components/BadForm";
import { BadTableNoSemantic, BadTableSemantic } from "../components/BadTable";
import { GoodForm } from "../components/GoodForm";
import { GoodTable } from "../components/GoodTable";

export const Test = () => (
  <>
    <BadFormNoSemantic />
    <BadFormSemantic />
    <GoodForm />
    <BadTableNoSemantic />
    <BadTableSemantic />
    <GoodTable />
  </>
);
