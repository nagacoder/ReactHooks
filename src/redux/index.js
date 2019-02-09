import React from 'react'
import {companyReducer} from './module/companyReducer'
export const initialState = {
    company:[]
}

export const reducer = ({companyData},action)=>({
    companyData:companyReducer(companyData,action)
})