import { SET_ACTIVE_BAKIYE_SYSTEM } from "./bakiyeSystemTypes";

const INITIAL_STATE = {
  activeBakiyeSsytemName: "Bakiye Yükle",
  bakiyeYukle: true,
  yuklemeGecmisi: false,
  paraIadeIslemleri: false,
};
const bakiyeSystemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_BAKIYE_SYSTEM: {
      return {
        ...state,
        activeBakiyeSsytemName: action.payload,
        bakiyeYukle: action.payload === "Bakiye Yükle" ? true : false,
        yuklemeGecmisi: action.payload === "Yükleme Geçmişi" ? true : false,
        paraIadeIslemleri:
          action.payload === "Para İade işlemleri" ? true : false,
      };
    }

    default:
      return state;
  }
};
export default bakiyeSystemReducer;
