import {creatActions} from 'redux-actions';
import actionTypes from '../actionTypes';

export default creatActions([actionTypes.LIST])

// export default creatActions({
//     [actionTypes.LIST]:({username='111',password})=>{
//         const list={
//             username,
//             password
//         }
//         return list
//     }
// })

// export const ADD_TODO = "ADD_TODO";
// export const TOGGLE_TODO = "TOGGLE_TODO";
// export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
// export const VisibilityFilters = {
//   SHOW_ALL: "SHOW_ALL",
//   SHOW_COMPLETED: "SHOW_COMPLETED",
//   SHOW_ACTIVE: "SHOW_ACTIVE"
// };

// export function addTodo(text) {
//   return { type: ADD_TODO, text };
// }

// export function toggleTodo(index) {
//   return { type: TOGGLE_TODO, index };
// }

// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter };
// }
