import { SET_ACTIVE_CORUIER_SYSTEM } from "./coruierTypes";

const INITIAL_STATE = {
  activeCoruierName: "Kurye Talep",
  kuryeTalep: true,
  talepOlusdur: false,
  kuryeGecmisi: false,
};
const coruierReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_CORUIER_SYSTEM: {
      return {
        ...state,
        activeCoruierName: action.payload,
        kuryeTalep: action.payload === "Kurye Talep" ? true : false,
        talepOlusdur: action.payload === "Talep Oluşdur" ? true : false,
        kuryeGecmisi: action.payload === "Kurye Geçmişi" ? true : false,
      };
    }

    default:
      return state;
  }
};
export default coruierReducer;
/*
      typeName: "Kurye Geçmişi",
      typeName: "Talep Oluşdur",
      typeName: "Kurye Talep",


*/
