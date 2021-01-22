import React, {createContext, useContext, useReducer} from "react";

//prepares the data layer
export const StateContext = createContext();


//wrap our app and provide the Dta layer
export const stateProvider = ({ reducer, initialState, children}) => {
    <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
    </StateContext.Provider>
};


export const useStateValue = () =>useContext(StateContext);