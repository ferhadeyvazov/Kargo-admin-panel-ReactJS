import { DETAILS_PAGE_NOTIFICATION } from "./notificationTypes";
import { notification_Data } from "../../constants/notifications";
const INITIAL_STATE = {
  notification_Data: notification_Data,
};

const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DETAILS_PAGE_NOTIFICATION: {
      return state;
    }

    default:
      return state;
  }
};
export default notificationReducer;
