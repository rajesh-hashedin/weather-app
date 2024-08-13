import { ADD_CITY, ADD_SEARCH_CITY, REMOVE_CITY } from "../actions/actionTypes";

const initialState = {
  searchHistory: ["Pune", "Bangalore"],
  cities: [],
  selectedCity: null,
};

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CITY:
      return { ...state, cities: [...state.cities, action.payload] };
    case ADD_SEARCH_CITY:
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.payload],
      };
    case REMOVE_CITY:
      return {
        ...state,
        cities: state.cities.filter((city) => city.name !== action.payload),
      };
    default:
      return state;
  }
}

export default weatherReducer;
