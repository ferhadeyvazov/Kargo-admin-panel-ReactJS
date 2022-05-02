import { SET_BUTTON_TO_PLUS_OR_MINUS } from "./bakiyeYukleActionTypes";

const INITIAL_STATE = {
  activeBakiyeYukleName: "Bank Hesap Bilgileri",
  bankHesapBilgiler: true, //trudursa minus olacag yani acig olacag
  bankHesabinaOdeme: false,
  onlineOdeme: false,
};
const bakiyeYukleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_BUTTON_TO_PLUS_OR_MINUS: {
      return {
        ...state,
        activeBakiyeYukleName: action.payload,
        bankHesapBilgiler:
          action.payload === "Bank Hesap Bilgileri" ? true : false,
        bankHesabinaOdeme:
          action.payload === "Bank Hesabina Ödeme" ? true : false,
        onlineOdeme: action.payload === "Online Ödeme" ? true : false,
      };
    }

    default:
      return state;
  }
};
export default bakiyeYukleReducer;
