import React from 'react'
import {CREATE_OFFICE,DELETE_OFFICE} from '../action/office'
const initialState ={
    list :[],
}
export const officeReducer = (state =initialState,action)=>{
    console.log(action)
   
    switch(action.type){
        case CREATE_OFFICE:
        return {
            ...state,
            list:[...state.list,action.payload] 
        }
        case DELETE_OFFICE:
            return{
                ...state,
                list: state.list.filter(function(item) {
                    return item.office_id != action.payload;
                })
            }
        default:
        return state
    }
}