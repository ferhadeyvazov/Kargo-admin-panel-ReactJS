import { SET_ACTIVE_STOCK } from './stockTypes';
export const setActiveStock = (active) => {
  return {
    type: SET_ACTIVE_STOCK,
    payload: active,
  };
};
