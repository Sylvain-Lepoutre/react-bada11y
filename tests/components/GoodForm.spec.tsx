import { prettyDOM, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { GoodForm } from "../../src/components/GoodForm";

describe("WAI-ARIA Roles, States, and Properties", () => {
  it("should have the 'form' role", () => {
    render(<GoodForm />);

    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  // it("should have an input with 'id' corresponding to his label 'htmlFor'", () => {
  //   render(<GoodForm data-testid="test" />);

  // });
});

describe("Keyboard Interaction", () => {
  it("should move the focus onto the first input", async () => {
    render(<GoodForm />);

    const user = userEvent.setup();
    await user.tab();

    const firstInput = screen.getByLabelText("Nom");

    expect(firstInput).toHaveFocus();
  });

  it("should move the focus onto the second input", async () => {
    render(<GoodForm />);

    const user = userEvent.setup();
    await user.tab();
    await user.tab();

    const secondInput = screen.getByLabelText("Prénom");

    expect(secondInput).toHaveFocus();
  });

  // it("should submit the form by pressing space", async () => {
  //   render(<GoodForm />);

  // });
});
