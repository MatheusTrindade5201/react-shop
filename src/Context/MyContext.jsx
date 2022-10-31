import { createContext, useState } from "react";
import dark from "../Styled/Themes/dark";
import light from "../Styled/Themes/light";

export const MyContext = createContext({});

export const MyContextProvider = ({children, value}) => {
  

    return(
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}