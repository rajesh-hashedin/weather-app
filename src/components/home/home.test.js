import { render, fireEvent, screen, prettyDOM } from "@testing-library/react";
import Home from "./home"; // Adjust the import path as necessary
import TestProvider from "../../services/test-provider";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

describe("Home test", () => {
  it("should render 'No locations added to watchlist' text when there is no city added", () => {
    render(
      <TestProvider>
        <Home />
      </TestProvider>
    );
    const noLocationText = screen.getByText("No locations added to watchlist");
    expect(noLocationText).toBeInTheDocument();
  });
  it("should render carousel when cities added", () => {
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
  it("should render search history when inputFocus is true", () => {
    // Render the Home component
    const { container } = render(
      <TestProvider>
        <Home />
      </TestProvider>
    );
    const cities = ["Pune", "Bangalore"];
    // Simulate the input focus event
    const inputElement = screen.getByRole("textbox"); // Adjust the selector based on your Input component
    fireEvent.focus(inputElement);
    console.log(prettyDOM(container));
    // Check if CitySearchList is rendered
    const citySearchListElement = screen.getByTestId("city_search_list"); // Ensure CitySearchList has a test ID
    // Loop through the array of cities and check if each one is present
    cities.forEach((city) => {
      expect(citySearchListElement).toHaveTextContent(city);
    });
  });
});
