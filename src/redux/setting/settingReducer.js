import { SET_ACTIVE_SUPPORT } from "./settingTypes";
const INITIALSTATE = {
  activeSettingName: "Destek Talebi",
  DestekTalebi: true,
  DestekTalebiOluştur: false,
  SistemMesajı: false,
};

const questionReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_SUPPORT: {
      return {
        ...state,
        activeSettingName: action.payload,
        DestekTalebi: action.payload === "Destek Talebi" ? true : false,
        DestekTalebiOluştur:
          action.payload === "Destek Talebi Oluştur" ? true : false,
        SistemMesajı: action.payload === "Sistem Mesajı" ? true : false,
      };
    }

    default:
      return state;
  }
};
export default questionReducer;
