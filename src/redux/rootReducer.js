import { combineReducers } from "redux";
import headerReducer from "./headertopbar/activTopBarReducer";
import questionReducer from "./questions/questionRuducer";
import sidebarReducer from "./sidebar/sidebarReduser";
import bakiyeSystemReducer from "./bakiyeSistemi/bakiyeSystemReducer";
import bakiyeYukleReducer from "./bakiyeYukle/bakiyeYukleReducer";
import coruierReducer from "./coruier/coruierReducer";
import notificationReducer from "./notifications/notificationsReducer";
import settingReducer from "./setting/settingReducer";
import buyForMeReducer from "./buyforme/buyForMeReducer";
import createDemandReducer from "./createdemand/createDemandReducer";
import createDemandTwoReducer from "./createdemandtwo/createDemandTwoReducer";
import stockReducer from "./stock/stockReducer";
import selectorReducer from "./createstock/cresteStockReducer";
import isLoggedInReducer from "./GirisSayfasiReduc/isLoggedIn/isLoggedInReducer";
const rootReducer = combineReducers({
  //store a import edilir
  sideBar: sidebarReducer,
  headerBar: headerReducer,
  questionReducer: questionReducer,
  bakiyeSystem: bakiyeSystemReducer,
  bakiyeYukle: bakiyeYukleReducer,
  courier: coruierReducer,
  notificationReducer,
  settingReducer,
  buyForMeReducer,
  createDemandReducer,
  createDemandTwoReducer,
  stockReducer,
  selectorReducer,
  isLoggedInReducer,
});

export default rootReducer;
