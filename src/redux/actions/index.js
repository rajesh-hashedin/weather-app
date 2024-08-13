import { ADD_CITY, ADD_SEARCH_CITY, REMOVE_CITY } from "./actionTypes";

export const addCity = (value) => ({
  type: ADD_CITY,
  payload: value,
});

export const removeCity = (value) => ({
  type: REMOVE_CITY,
  payload: value,
});

export const addSearchCity = (value) => ({
  type: ADD_SEARCH_CITY,
  payload: value,
});
