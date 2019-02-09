import React from 'react'
import {CREATE_COMPANY,DELETE_COMPANY} from '../action/company'
const initialState ={
    list :[]
}
export const companyReducer = (state =initialState,action)=>{
   
    console.log(action)
    switch(action.type){
        case CREATE_COMPANY:
        return {
            ...state,
            list:[...state.list,action.payload] 
        }
        case DELETE_COMPANY:
            return{
                ...state,
                list: state.list.filter(function(item) {
                    return item.id != action.payload;
                })
            }
        default:
        return state
    }
}