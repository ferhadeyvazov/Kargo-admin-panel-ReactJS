import { SET_ACTIVE_CREATE_DEMAND_TWO } from "./createDemandTwoTypes";
const INITIAL_STATE = {
  activeCreateDemandTwoName: "My Stock",
  myAdressTwo: false,
  myStockTwo: true,
};
const createDemandTwoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_CREATE_DEMAND_TWO: {
      return {
        ...state,
        activeCreateDemandTwoName: action.payload,
        myAdressTwo: action.payload === "My Adress" ? true : false,
        myStockTwo: action.payload === "My Stock" ? true : false,
      };
    }
    default:
      return state;
  }
};
export default createDemandTwoReducer;
