/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("App Router: Works with Server Components", () => {
  render(<Page />);
  expect(screen.getByRole("heading")).toHaveTextContent("App Router");
});

it("Ho Van Hanh should be display in this page", () => {
  render(<Page />);
  expect(screen.getByText("Hanh Hio")).toBeInTheDocument();
});
