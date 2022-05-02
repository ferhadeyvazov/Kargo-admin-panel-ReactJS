import { SET_SELECTOR } from './createStoreType';
export const setSelector = (active) => {
  return {
    type: SET_SELECTOR,
    payload: active,
  };
};
