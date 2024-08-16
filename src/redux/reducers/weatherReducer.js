import { copyData } from "../../utils/common";
import {
  ADD_CITY,
  ADD_SEARCH_CITY,
  REMOVE_CITY,
  SET_CITY,
} from "../actions/actionTypes";

const initialState = {
  searchHistory: ["Pune", "Bangalore"],
  cities: [
    { name: "Pune", temp: 100, imageIcon: "10d" },
    { name: "Solapur", temp: 100, imageIcon: "10d" },
  ],
  selectedCity: null,
};

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CITY: {
      const stateCopy = copyData(state);
      stateCopy.cities.push(action.payload);
      return stateCopy;
    }
    case SET_CITY: {
      const stateCopy = copyData(state);
      stateCopy.selectedCity = action.payload;
      return stateCopy;
    }
    case ADD_SEARCH_CITY: {
      const stateCopy = copyData(state);
      stateCopy.searchHistory.push(action.payload);
      return stateCopy;
    }
    case REMOVE_CITY: {
      const stateCopy = copyData(state);
      stateCopy.cities = state.cities.filter(
        (city) => city.name !== action.payload
      );
      return stateCopy;
    }
    default:
      return state;
  }
}

export default weatherReducer;
