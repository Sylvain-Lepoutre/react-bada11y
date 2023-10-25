import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import { A11yNav } from "../../src/components/pages/persona1/persona1nav2/A11yNav";

const anchors = ["Accueil", "Produits", "Services", "Contact"];

describe("WAI-ARIA Roles, States, and Properties", () => {
  test("the nav has the 'navigation' role", () => {
    render(<A11yNav />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("links have an 'href' attribute", () => {
    render(<A11yNav />);

    for (const anchor of anchors) {
      const anchorElement = screen.getByText(anchor);
      console.log(anchorElement);

      expect(anchorElement).toHaveAttribute("href");
    }
  });
});

describe("Keyboard Interaction", () => {
  test("should move the focus onto the next <a>", async () => {
    render(<A11yNav />);

    const user = userEvent.setup();

    for (const anchor of anchors) {
      await user.tab();

      const inputElement = screen.getByText(anchor);

      expect(inputElement).toHaveFocus();
    }
  });
});
