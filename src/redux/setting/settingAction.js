import { SET_ACTIVE_SUPPORT } from "./settingTypes";

export const setSettingActive = (name) => {
  return {
    type: SET_ACTIVE_SUPPORT,
    payload: name,
  };
};
