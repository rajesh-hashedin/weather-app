import { DECREMENT, INCREMENT } from "../actions/actionTypes";

const initialState = {
  count: 0,
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
