import { SET_ACTIVE_BUY_FOR_ME } from './buyForMeTypes';
const INITIAL_STATE = {
  activeBuyForMeName: 'Create Demand',
  myReguest: false,
  createDemand: true,
  createBatch: false,
};
const buyForMeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_BUY_FOR_ME: {
      return {
        ...state,
        activeBuyForMeName: action.payload,
        myReguest: action.payload === 'My Request' ? true : false,
        createDemand: action.payload === 'Create Demand' ? true : false,
        createBatch: action.payload === 'Create Batch' ? true : false,
      };
    }

    default:
      return state;
  }
};
export default buyForMeReducer;
