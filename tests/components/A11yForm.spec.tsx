import { prettyDOM, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { A11yForm } from "../../src/components/pages/persona1/persona1form2/A11yForm";

// data-testid="test"

describe("WAI-ARIA Roles, States, and Properties", () => {
  it("should have the 'form' role", () => {
    render(<A11yForm />);

    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("should have an input with 'id' corresponding to his label 'htmlFor'", () => {
    render(<A11yForm />);

    const inputs = screen.getAllByRole("textbox");
    const labels = screen.getAllByLabelText(/.*/);

    labels.map((label) => {
      console.log("LABEL ID: ", label.id);
    });

    inputs.map((input) => {
      console.log("INPUT ID: ", input.id);
      const correspondingLabel = labels.find((label) => label.id === input.id);
      expect(correspondingLabel).toBeTruthy();
    });
  });

  it("should have required attribute on inputs", () => {
    render(<A11yForm />);

    const inputs = screen.getAllByRole("textbox");

    inputs.map((input) => {
      expect(input).toBeRequired();
    });
  });
});

describe("Keyboard Interaction", () => {
  it("should move the focus onto the first input", async () => {
    render(<A11yForm />);

    const user = userEvent.setup();
    await user.tab();

    const firstInput = screen.getByLabelText("Nom");

    expect(firstInput).toHaveFocus();
  });

  it("should move the focus onto the second input", async () => {
    render(<A11yForm />);

    const user = userEvent.setup();
    await user.tab();
    await user.tab();

    const secondInput = screen.getByLabelText("Prénom");

    expect(secondInput).toHaveFocus();
  });
});

describe("Mouse interaction", () => {
  it("should put the focus on the input field", async () => {
    render(<A11yForm />);

    const emailLabel = screen.getByLabelText("E-mail");
    console.log("E-mail Label :", emailLabel.id);
    const emailInput = screen.getByRole("textbox", { name: "E-mail" });
    console.log("E-Mail Input :", emailInput.id);

    const user = userEvent.setup();
    await user.click(emailLabel);
    expect(emailInput).toHaveFocus();
  });
});
