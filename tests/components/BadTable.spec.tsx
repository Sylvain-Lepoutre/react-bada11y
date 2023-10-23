import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { BadTable } from "../../src/components/pages/persona1/persona1table1/BadTable";

describe("WAI-ARIA Roles, States and Properties", () => {
  it("should not have the 'table' role", () => {
    render(<BadTable />);

    expect(screen.queryByRole("table")).toBeNull();
  });
});
