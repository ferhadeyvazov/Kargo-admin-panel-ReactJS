import { SET_ACTIVE_CREATE_DEMAND } from './createDemandTypes';
export const setActiveButton = (active) => {
  return {
    type: SET_ACTIVE_CREATE_DEMAND,
    payload: active,
  };
};
