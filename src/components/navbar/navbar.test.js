import { render, screen } from "@testing-library/react";
import Navbar from "./navbar";

test("Check image tag", () => {
  render(<Navbar />);
  const checkImageTag = screen.getByRole("img");
  expect(checkImageTag).toBeInTheDocument();
});

test("Check navbar title", () => {
  render(<Navbar />);
  const checkNavbarTitle = screen.getByText("Weather Forecaster");
  expect(checkNavbarTitle).toBeInTheDocument();
});
