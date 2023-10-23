import { prettyDOM, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import { A11yForm } from "../../src/components/pages/persona1/persona1form2/A11yForm";

// data-testid="test"

const labels = [
  "Nom",
  "Prénom",
  "Vous êtes ?",
  "E-mail",
  "Mot de passe",
] as const;

describe("WAI-ARIA Roles, States, and Properties", () => {
  test("the form has the 'form' role", () => {
    render(<A11yForm />);

    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  test("all labels have an associated form element", () => {
    render(<A11yForm />);

    for (const label of labels) {
      const inputElement = screen.getByLabelText(label);

      expect(inputElement).toBeInTheDocument();
    }
  });

  test("should have required attribute on inputs", () => {
    render(<A11yForm />);

    for (const label of labels) {
      const inputElement = screen.getByLabelText(label);
      expect(inputElement).toBeRequired();
    }
  });
});

describe("Keyboard Interaction", () => {
  test("should move the focus onto the first input", async () => {
    render(<A11yForm />);

    const user = userEvent.setup();

    for (const label of labels) {
      await user.tab();

      const inputElement = screen.getByLabelText(label);

      expect(inputElement).toHaveFocus();
    }
  });
});

describe("Mouse Interaction", () => {
  test("should put the focus on the input field", async () => {
    render(<A11yForm />);

    const user = userEvent.setup();

    for (const label of labels) {
      const labelElement = screen.getByText(label);
      const inputElement = screen.getByLabelText(label);

      await user.click(labelElement);

      expect(inputElement).toHaveFocus();
    }
  });
});
