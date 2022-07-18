import React, {useContext, useState} from 'react';
import { ThemeContext } from 'styled-components';
const WordContext = React.createContext();

export function useWord() {
    return useContext(ThemeContext)
}
export function WordProvider({ children }) {
    const [testVar,setTestVar]=useState(true);
    return (
        <WordContext.Provider value={testVar}>
            {children}
        </WordContext.Provider>
    )

}