import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchHistory: ["Pune", "Bangalore"],
  cities: [
    {
      imageIcon: "10d",
      name: "Solapur",
      temp: 350,
      pressure: "123",
      humidity: "457",
      dt: 1724838608,
      timezone: 19800,
      sunrise: 1724805709,
      sunset: 1724850823,
    },
    {
      imageIcon: "10d",
      name: "Beng",
      temp: 350,
      pressure: "123",
      humidity: "457",
      dt: 1724838608,
      timezone: 19800,
      sunrise: 1724805709,
      sunset: 1724850823,
    },
  ],
  selectedCity: null,
};

export const counterSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addCity: (state, action) => {
      state.cities.push(action.payload);
    },
    removeCity: (state, action) => {
      state.cities = state.cities.filter(
        (city) => city.name !== action.payload
      );
    },
    addSearchCity: (state, action) => {
      state.searchHistory.push(action.payload);
    },
    setCity: (state, action) => {
      state.selectedCity = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCity, removeCity, addSearchCity, setCity } =
  counterSlice.actions;

export default counterSlice.reducer;
