import { CHOOSE_CATEGORY } from './questionTypes';
import { questions } from '../../constants/questionsData';
const INITIALSTATE = {
  categoryQuestions: 'Spor',
};

const questionReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case CHOOSE_CATEGORY: {
      const filtered = questions.filter((q) => q.category === action.payload);
      console.log(filtered);
      return {
        ...state,
        categoryQuestions: action.payload,
      };
    }

    default:
      return state;
  }
};
export default questionReducer;
