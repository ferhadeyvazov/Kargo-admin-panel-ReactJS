import { SET_BUTTON_TO_PLUS_OR_MINUS } from "./bakiyeYukleActionTypes";

export const setButtonToPlusOrMinus = (buttonParentName) => {
  return {
    type: SET_BUTTON_TO_PLUS_OR_MINUS,
    payload: buttonParentName,
  };
};
