import {
  SET_ACTIVE_HEADER,
  TOGGLE_HEADER_FALSE,
  TOGGLE_HEADER_TRUE,
} from "./activTopBarTypes";

export const setHeader_Active_icon = (active_header_icon) => {
  return {
    type: SET_ACTIVE_HEADER,
    payload: active_header_icon,
  };
};
export const openHeaderBar = (boolean) => {
  return {
    type: TOGGLE_HEADER_TRUE,
    payload: boolean,
  };
};
export const closeHeaderBar = (boolean) => {
  return {
    type: TOGGLE_HEADER_FALSE,
    payload: boolean,
  };
};
