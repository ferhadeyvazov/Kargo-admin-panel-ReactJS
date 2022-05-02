import { SET_ACTIVE_BAKIYE_SYSTEM } from "./bakiyeSystemTypes";

export const setBakiyeSystemActive = (activeName) => {
  return {
    type: SET_ACTIVE_BAKIYE_SYSTEM,
    payload: activeName,
  };
};
