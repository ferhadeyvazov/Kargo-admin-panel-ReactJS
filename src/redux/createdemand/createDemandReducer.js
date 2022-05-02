import { SET_ACTIVE_CREATE_DEMAND } from "./createDemandTypes";
const INITIAL_STATE = {
  activeCreateDemandName: "My Adress",
  myAdress: true,
  myStock: false,
};
const createDemandReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_CREATE_DEMAND: {
      return {
        ...state,
        activeCreateDemandName: action.payload,
        myAdress: action.payload === "My Adress" ? true : false,
        myStock: action.payload === "My Stock" ? true : false,
      };
    }
    default:
      return state;
  }
};
export default createDemandReducer;
