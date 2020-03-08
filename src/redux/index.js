import rootReducer from "./reducers";
import { createStore } from "redux";
import { increase } from "./actions";
import * as actionTypes from './actionTypes'
const store = createStore(rootReducer);
//这两种都可以实现
store.dispatch({type:actionTypes.INCREASE});
store.dispatch(increase())

console.log(store.getState())
export default store;
