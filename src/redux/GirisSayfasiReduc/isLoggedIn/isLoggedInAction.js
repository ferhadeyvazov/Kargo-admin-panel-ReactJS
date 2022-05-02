import { SET_LOGGED_IN_TRUE_OR_FALSE } from "./isLoggedInType";

export const setLoggedIn = (boolean) => {
  return {
    type: SET_LOGGED_IN_TRUE_OR_FALSE,
    payload: boolean,
  };
};
