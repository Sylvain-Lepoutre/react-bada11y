import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GoodTable } from "../../src/components/GoodTable";

describe("WAI-ARIA Roles, States and Properties", () => {
  it("should have the 'table' role", () => {
    render(<GoodTable />);

    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("should have the 'row' role for each row container", () => {
    render(<GoodTable />);
  });
});
