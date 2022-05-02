import { SET_ACTIVE_CREATE_DEMAND_TWO } from './createDemandTwoTypes';
export const setActiveButtonTwo = (active) => {
  return {
    type: SET_ACTIVE_CREATE_DEMAND_TWO,
    payload: active,
  };
};
