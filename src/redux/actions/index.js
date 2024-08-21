import {
  ADD_CITY,
  ADD_SEARCH_CITY,
  REMOVE_CITY,
  SET_CITY,
} from "./actionTypes";

export function addCity(value) {
  return {
    type: ADD_CITY,
    payload: value,
  };
}

export function removeCity(value) {
  return {
    type: REMOVE_CITY,
    payload: value,
  };
}

export function addSearchCity(value) {
  return {
    type: ADD_SEARCH_CITY,
    payload: value,
  };
}

export function setCity(value) {
  return {
    type: SET_CITY,
    payload: value,
  };
}
