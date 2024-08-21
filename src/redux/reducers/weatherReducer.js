import { copyData } from "../../utils/common";
import {
  ADD_CITY,
  ADD_SEARCH_CITY,
  REMOVE_CITY,
  SET_CITY,
} from "../actions/actionTypes";

const initialState = {
  searchHistory: ["Pune", "Bangalore"],
  cities: [],
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
      if (
        !stateCopy.searchHistory.find(function (city) {
          return city === action.payload;
        })
      )
        stateCopy.searchHistory.push(action.payload);
      return stateCopy;
    }
    case REMOVE_CITY: {
      const stateCopy = copyData(state);
      stateCopy.cities = state.cities.filter(function (city) {
        return city.name !== action.payload;
      });
      return stateCopy;
    }
    default:
      return state;
  }
}

export default weatherReducer;
