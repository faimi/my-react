import {handleActions} from "redux-actions";
import actionTypes from '../actionTypes';
import {combineReducers} from 'redux';

const initialState={
    ces:{}
}

const CES= handleActions({
    [actionTypes.CES]:(state,action)=>{
        return {
            ...state
        }
    }
},initialState.ces)

const rootReducer=combineReducers({
    CES
})
export default rootReducer