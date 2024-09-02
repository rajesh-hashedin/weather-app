import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./home";
import store from "../../redux/store";

test("Check search bar", () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </MemoryRouter>
  );
  const checkInput = screen.getByRole("textbox");
  expect(checkInput).toBeInTheDocument();
});
