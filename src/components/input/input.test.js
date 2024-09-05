import { prettyDOM, render, screen } from "@testing-library/react";
import Input from "./input";

describe("Input UI testing", () => {
  it("should contain placeholder", () => {
    render(<Input />);
    const checkInput = screen.getByPlaceholderText("Search Location");
    expect(checkInput).toBeInTheDocument();
  });

  it("should be text type", () => {
    render(<Input />);
    const checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("type", "text");
  });

  it("should have 'name' attribute with 'city' value", () => {
    render(<Input />);
    const checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "city");
  });
});
