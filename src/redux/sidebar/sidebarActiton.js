import {
  TOGGLE_SIDE_BAR_TRUE,
  TOGGLE_SIDE_BAR_FALSE,
  SET_ACTIVE_SIDEBAR,
} from "./sidebarTypes";

export const setSideBarActive = (nameOfActiveSidebar) => {
  return {
    type: SET_ACTIVE_SIDEBAR,
    payload: nameOfActiveSidebar,
  };
};

export const openSideBarAction = (boolean) => {
  return {
    type: TOGGLE_SIDE_BAR_TRUE,
    payload: boolean,
  };
};
export const closeSideBarAction = (boolean) => {
  return {
    type: TOGGLE_SIDE_BAR_FALSE,
    payload: boolean,
  };
};
