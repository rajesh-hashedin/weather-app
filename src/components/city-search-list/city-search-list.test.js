import { fireEvent, render, screen } from "@testing-library/react";
import CitySearchList from "./city-search-list";
import TestProvider from "../../services/test-provider";

describe("City Search List UI Testing", () => {
  it("should render all city name", () => {
    const cities = ["Pune", "Bangalore"];
    render(
      <TestProvider>
        <CitySearchList cities={cities} />
      </TestProvider>
    );
    // Simulate the input focus event
    const inputElement = screen.getByRole("textbox"); // Adjust the selector based on your Input component
    fireEvent.focus(inputElement);
    // Check if CitySearchList is rendered
    const citySearchListElement = screen.getByTestId("city_search_list"); // Ensure CitySearchList has a test ID
    // Loop through the array of cities and check if each one is present
    cities.forEach((city) => {
      expect(citySearchListElement).toHaveTextContent(city);
    });
  });
});
