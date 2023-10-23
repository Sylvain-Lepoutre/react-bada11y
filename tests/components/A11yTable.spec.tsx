import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { A11yTable } from "../../src/components/pages/persona1/persona1table2/A11yTable";

describe("WAI-ARIA Roles, States and Properties", () => {
  it("should have the 'table' role", () => {
    render(<A11yTable />);

    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("should have the 'rowgroup' role", () => {
    render(<A11yTable />);
    const rowGroups = screen.getAllByRole("rowgroup");

    rowGroups.map((rowGroup) => {
      console.log("Test", rowGroup.tagName);
    });
  });

  // it("should have the 'row' role for each row container", () => {
  //   render(<A11yTable />);
  // });
});
