import { SET_ACTIVE_CORUIER_SYSTEM } from "./coruierTypes";

export const setCourierActive = (activeName) => {
  return {
    type: SET_ACTIVE_CORUIER_SYSTEM,
    payload: activeName,
  };
};
