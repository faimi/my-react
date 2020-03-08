import { handleActions } from "redux-actions";
import * as actionTypes from "../actionTypes";
import { combineReducers } from "redux";

const initialState = {
  list: {},
  count: 1
};

const list = handleActions(
  {
    [actionTypes.LIST]: (state, action) => {
      return {
        ...state
      };
    }
    //如果没有list，会变成三维数组
  },
  initialState.list
);

function reducers(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREASE:
      return {
        count: state.count + 1
      };
    case actionTypes.DECREASE:
      return {
        count: state.count - 1
      };
    case actionTypes.RESET:
      return {
        count: 0
      };
    default:
      //必须返回state
      return state;
  }
}

const rootReducer = combineReducers({
  list,reducers
});
export default rootReducer;
