import { DECREMENT, INCREMENT } from "../actions/actionTypes";

const initialState = {
  count: 0,
  searchHistory: ["Pune", "Bengaluru"],
  cities: [],
  cities: [
    {
      name: "Pune",
      temp: 20,
      status: "Warning",
      description: "Expecting rainfall",
    },
    {
      name: "Bengaluru",
      temp: 20,
      status: "Warning",
      description: "Expecting rainfall",
    },
    {
      name: "Kolhapur",
      temp: 20,
      status: "Warning",
      description: "Expecting rainfall",
    },
    {
      name: "Kolhapur1",
      temp: 20,
      status: "Warning",
      description: "Expecting rainfall",
    },
    {
      name: "Kolhapur2",
      temp: 20,
      status: "Warning",
      description: "Expecting rainfall",
    },
    {
      name: "Kolhapur3",
      temp: 20,
      status: "Warning",
      description: "Expecting rainfall",
    },
    {
      name: "Kolhapur4",
      temp: 20,
      status: "Warning",
      description: "Expecting rainfall",
    },
    {
      name: "Kolhapur5",
      temp: 20,
      status: "Warning",
      description: "Expecting rainfall",
    },
    {
      name: "Kolhapur6",
      temp: 20,
      status: "Warning",
      description: "Expecting rainfall",
    },
    {
      name: "Kolhapur7",
      temp: 20,
      status: "Warning",
      description: "Expecting rainfall",
    },
    {
      name: "Kolhapur8",
      temp: 20,
      status: "Warning",
      description: "Expecting rainfall",
    },
    {
      name: "Kolhapur9",
      temp: 20,
      status: "Warning",
      description: "Expecting rainfall",
    },
    {
      name: "Kolhapur10",
      temp: 20,
      status: "Warning",
      description: "Expecting rainfall",
    },
    {
      name: "Kolhapu11",
      temp: 20,
      status: "Warning",
      description: "Expecting rainfall",
    },
  ],
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.payload };
    case DECREMENT:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counterReducer;
