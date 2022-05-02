import {SET_ACTIVE_BUY_FOR_ME } from "./buyForMeTypes";

export const setBuyForMeActive = (activeName) => {
  return {
    type: SET_ACTIVE_BUY_FOR_ME,
    payload: activeName,
  };
};
