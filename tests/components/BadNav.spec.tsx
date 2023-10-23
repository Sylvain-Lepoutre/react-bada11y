import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { BadNav } from "../../src/components/pages/persona1/persona1nav1/BadNav";

describe("WAI-ARIA Roles, States, and Properties", () => {
  test("shouldn't have the 'navigation' role", () => {
    render(<BadNav />);

    expect(screen.queryByRole("navigation")).toBeNull();
  });
});
