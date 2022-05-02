import {
  SET_ACTIVE_HEADER,
  TOGGLE_HEADER_FALSE,
  TOGGLE_HEADER_TRUE,
} from "./activTopBarTypes";

const INITIAL_STATE = {
  linkPage: "",
  isHeaderOpen: false,
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_HEADER: {
      return {
        ...state,
        linkPage: action.payload,
      };
    }

    case TOGGLE_HEADER_TRUE: {
      return {
        ...state,
        isHeaderOpen: action.payload,
      };
    }
    case TOGGLE_HEADER_FALSE: {
      return {
        ...state,
        isHeaderOpen: action.payload,
      };
    }
    default:
      return state;
  }
};
export default headerReducer;
