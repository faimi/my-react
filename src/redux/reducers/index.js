import {handleActions} from "redux-actions";
import actionTypes from '../actionTypes';
import {combineReducers} from 'redux';

const initialState={
    list:{}
}

const LIST= handleActions({
    [actionTypes.LIST]:(state,action)=>{
        return {
            ...state
        }
    }
    //如果没有list，会变成三维数组
},initialState.list)

const rootReducer=combineReducers({
    LIST
})
export default rootReducer

// import { combineReducers } from "redux";
// import {
//   ADD_TODO,
//   TOGGLE_TODO,
//   SET_VISIBILITY_FILTER,
//   VisibilityFilters
// } from "../actions/index";
// const { SHOW_ALL } = VisibilityFilters;

// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter;
//     default:
//       return state;
//   }
// }

// function todos(state = [], action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         ...state,
//         {
//           text: action.text,
//           completed: false
//         }
//       ];
//     case TOGGLE_TODO:
//       return state.map((todo, index) => {
//         if (index === action.index) {
//           return Object.assign({}, todo, {
//             completed: !todo.completed
//           });
//         }
//         return todo;
//       });
//     default:
//       return state;
//   }
// }

// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// });

// export default todoApp;
