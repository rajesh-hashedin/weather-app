import { render, screen } from "@testing-library/react";
import Input from "./input";

test("Check search bar", () => {
  render(<Input />);
  const checkInput = screen.getByRole("textbox");
  expect(checkInput).toBeInTheDocument();
});

test("Check search bar placeholder", () => {
  render(<Input />);
  const checkInput = screen.getByPlaceholderText("Search Location");
  expect(checkInput).toBeInTheDocument();
});

test("Check search bar type", () => {
  render(<Input />);
  const checkInput = screen.getByRole("textbox");
  expect(checkInput).toHaveAttribute("type", "text");
});

test("Check search bar name", () => {
  render(<Input />);
  const checkInput = screen.getByRole("textbox");
  expect(checkInput).toHaveAttribute("name", "city");
});
