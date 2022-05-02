import {
  SET_ACTIVE_SIDEBAR,
  TOGGLE_SIDE_BAR_FALSE,
  TOGGLE_SIDE_BAR_TRUE,
} from "./sidebarTypes";

const INITIAL_STATE = {
  activeSideBarName:
    JSON.parse(localStorage.getItem("sidebarKey")) || "main-menu",
  isSideBarOpen: false,
};

const sidebarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_SIDEBAR: {
      return {
        ...state,
        activeSideBarName: action.payload,
      };
    }

    case TOGGLE_SIDE_BAR_TRUE: {
      return {
        ...state,
        isSideBarOpen: action.payload,
      };
    }
    case TOGGLE_SIDE_BAR_FALSE: {
      return {
        ...state,
        isSideBarOpen: action.payload,
      };
    }
    default:
      return state;
  }
};
export default sidebarReducer;
//selectors  (bu ornegi sadece reselect calisanda yazdig Ornek olsun deye )
export const selectSideBar = (state) => state.sideBar;
