import { DETAILS_PAGE_NOTIFICATION } from './notificationTypes';

export const details_page = (datas) => {
  return {
    type: DETAILS_PAGE_NOTIFICATION,
    payload: datas,
  };
};
