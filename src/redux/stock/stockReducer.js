import { SET_ACTIVE_STOCK } from './stockTypes';
const INITIAL_STATE = {
  activeStock: 'My Stock',
  createStock: false,
  myStock: true,
};
const stockReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_ACTIVE_STOCK: {
        return {
          ...state,
          activeStock: action.payload,
          createStock: action.payload === 'Create Stock' ? true : false,
          myStock: action.payload === 'My Stock' ? true : false,
        };
      }
      default:
        return state;
    }
  };
  export default stockReducer;