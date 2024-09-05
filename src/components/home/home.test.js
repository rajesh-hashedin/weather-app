import { render, fireEvent, screen } from "@testing-library/react";
import Home from "./home"; // Adjust the import path as necessary
import TestProvider from "../../services/test-provider";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

describe("Home UI Testing", () => {
  it("should render navbar and search bar", () => {
    render(
      <TestProvider>
        <Home />
      </TestProvider>
    );
    const navbar = screen.getByTestId("navbar_item");
    expect(navbar).toBeInTheDocument();
    const checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument();
  });
  it("should render 'No locations added to watchlist' text", () => {
    render(
      <TestProvider>
        <Home />
      </TestProvider>
    );
    const noLocationText = screen.getByText("No locations added to watchlist");
    expect(noLocationText).toBeInTheDocument();
  });
});
describe("Home Functional Testing", () => {
  it("should render carousel when cities are added", () => {
    const customStore = mockStore({
      weather: {
        searchHistory: [],
        cities: [
          {
            imageIcon: "04n",
            name: "Bengaluru",
            temp: 296.32,
            pressure: 1011,
            humidity: 84,
            dt: 1725474304,
            timezone: 19800,
            sunrise: 1725410327,
            sunset: 1725454729,
          },
        ],
        selectedCity: null,
      },
    });
    render(
      <TestProvider customStore={customStore}>
        <Home />
      </TestProvider>
    );
    const carousel = screen.getByTestId("carousel_container");
    expect(carousel).toBeInTheDocument();
  });
  it("should render search history when input focus is true", () => {
    render(
      <TestProvider>
        <Home />
      </TestProvider>
    );
    // Simulate the input focus event
    const inputElement = screen.getByRole("textbox"); // Adjust the selector based on your Input component
    fireEvent.focus(inputElement);
    // Check if CitySearchList is rendered
    const citySearchListElement = screen.getByTestId("city_search_list"); // Ensure CitySearchList has a test ID
    // Loop through the array of cities and check if each one is present
    expect(citySearchListElement).toBeInTheDocument();
  });
});
