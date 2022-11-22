import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock('next/router', () => require('next-router-mock'));

describe("Index", () => {
  it("renders a component", () => {
    render(<Home />);
    expect(screen.getByTestId("main")).toBeInTheDocument();
  });
});