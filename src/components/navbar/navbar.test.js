import { render, screen } from "@testing-library/react";
import Navbar from "./navbar";

describe("Navbar UI Testing", () => {
  it("Check image tag", () => {
    render(<Navbar />);
    const checkImageTag = screen.getByRole("img");
    expect(checkImageTag).toBeInTheDocument();
  });

  it("Check navbar title", () => {
    render(<Navbar />);
    const checkNavbarTitle = screen.getByText("Weather Forecaster");
    expect(checkNavbarTitle).toBeInTheDocument();
  });
});
