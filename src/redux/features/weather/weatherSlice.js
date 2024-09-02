import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchHistory: ["Pune", "Bangalore"],
  cities: [],
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
