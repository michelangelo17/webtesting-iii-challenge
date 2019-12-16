import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Dashboard from "./Dashboard";

test("state defaults to locked false and closed false", () => {
  const { getByText } = render(<Dashboard />);
  const gateUnlocked = getByText(/unlocked/i);
  const gateOpen = getByText(/open/i);
  expect(gateUnlocked).toBeInTheDocument();
  expect(gateOpen).toBeInTheDocument();
});
