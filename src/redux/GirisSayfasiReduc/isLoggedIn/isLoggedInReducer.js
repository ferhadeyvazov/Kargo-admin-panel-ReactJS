import { SET_LOGGED_IN_TRUE_OR_FALSE } from "./isLoggedInType";

const INITIAL_STATE = {
  isLoggedIn: false,
};
const isLoggedInReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOGGED_IN_TRUE_OR_FALSE: {
      return {
        ...state,
        isLoggedIn: state.isLoggedIn,
      };
    }
    default:
      return state;
  }
};
export default isLoggedInReducer;
