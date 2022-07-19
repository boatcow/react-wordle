import React, {useContext, useEffect, useState} from 'react';
import { ThemeContext } from 'styled-components';
const WordContext = React.createContext();
const UpdateWordContext = React.createContext();

export function useWord() {
    return useContext(WordContext)
}
export function useSetWord() {
    return useContext(UpdateWordContext)
}

export function WordProvider({ children }) {

    var [wordInputs,setWordInputs]=useState([['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','','']]);
    var [wordBackground,setWordBackground]=useState([['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','','']]);
    const correctWord="LIVES"
    var [wordIndex,setWordIndex]= useState(0);
    console.log("1 wordBackground: ",wordBackground);
    useEffect(() => {
    },[])


    function appendLetter(letter)
    {
    setWordIndex(prevCount => {
        let prevWordArray = [...wordInputs];
        console.log("wordIndex context: ",wordIndex);
        console.log("(prevCount/5)>>0]: ",(prevCount/5)>>0);
        prevWordArray[prevCount%5][(prevCount/5)>>0]=letter
        setWordInputs(prevWordArray);

        let prevBackgroundArray = [...wordBackground];
        
        if(prevWordArray[prevCount%5][(prevCount/5)>>0].toUpperCase() == correctWord[prevCount%5].toUpperCase())
        {
            prevBackgroundArray[prevCount%5][(prevCount/5)>>0]="green"
        }
        else if(correctWord.includes(letter.toUpperCase()))
        {
            prevBackgroundArray[prevCount%5][(prevCount/5)>>0]="orange"
        }
        
        setWordBackground(prevBackgroundArray);


        
        return(prevCount + 1)
    });
    }

    function removeLetter(letter)
    {
    setWordIndex(prevCount => {
        let prevArray = [...wordInputs];
        if((prevCount)%5==0)
        {
            return(prevCount)
        }
        prevArray[(prevCount-1)%5][((prevCount-1)/5)>>0]=''
        setWordInputs(prevArray);

        let prevBackgroundArray = [...wordBackground];
        
        prevBackgroundArray[prevCount%5][(prevCount/5)>>0]=""
        
 
        return(prevCount-1)
    });
    }

    function setColorMapping(letter)
    {
    setWordIndex(prevCount => {
        let prevArray = [...wordInputs];
        prevArray[(prevCount-1)%5][((prevCount-1)/5)>>0]=''
        setWordInputs(prevArray);
        return(prevCount-1)
    });
    }
    
    
    return (
        <WordContext.Provider value={[wordInputs,setWordInputs,wordIndex,setWordIndex,appendLetter,removeLetter,wordBackground,setWordBackground]}>
            {children}
        </WordContext.Provider>
    )

}