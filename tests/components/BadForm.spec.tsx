import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { BadForm } from "../../src/components/pages/persona1/persona1form1/BadForm";

const testIds = ["lastname", "firstname"] as const;

describe("WAI-ARIA Roles, States, and Properties", () => {
  test("should not have the 'form' role", () => {
    render(<BadForm />);

    expect(screen.queryByRole("form")).toBeNull();
  });

  test("should not have required attribute on inputs", () => {
    render(<BadForm />);

    for (const testId of testIds) {
      const inputElement = screen.getByTestId(testId);

      expect(inputElement).not.toBeRequired();
    }
  });
});
