import React,{createContext,useContext,useReducer} from 'react'

export const State = createContext()
export const Provider = ({reducer,initialState,children}) => (
    <State.Provider value={useReducer(reducer,initialState)}>
        {children}
    </State.Provider>

)
export const getState =() => useContext(State)