import { createAction } from "redux-actions";
import * as actionTypes from "../actionTypes";
export const list = createAction(actionTypes.LIST);
export function increase() {
  return {
    type: actionTypes.INCREASE
  };
}
export function reset() {
  return {
    type: actionTypes.RESET
  };
}
export function decrease() {
  return {
    type: actionTypes.DECREASE
  };
}
