import { SET_SELECTOR } from './createStoreType';
const INITIAL_STATE = {
  activeSelector: 'global',
  global: true,
  local: false,
};
const selectorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SELECTOR: {
      return {
        ...state,
        activeSelector: action.payload,
        global: action.payload === 'global' ? true : false,
        local: action.payload === 'local' ? true : false,
      };
    }
    default:
      return state;
  }
};
export default selectorReducer;
