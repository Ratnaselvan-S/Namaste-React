import "@testing-library/jest-dom";
import Contact from "../Contact";
import React from "react";
import { render, screen } from "@testing-library/react";

test("Need to check the home page search button", () => {
  render(<Contact />);

  const button = screen.getAllByRole("heading");
  expect(button.length).toBe(2);
});

test("Need to check the home page search button", () => {
  render(<Contact />);

  const button = screen.getByText("Search");
  expect(button).toBeInTheDocument();
});
