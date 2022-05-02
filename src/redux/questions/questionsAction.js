import { CHOOSE_CATEGORY } from "./questionTypes";

export const choose_category_function = (category) => {
  return {
    type: CHOOSE_CATEGORY,
    payload: category,
  };
};
