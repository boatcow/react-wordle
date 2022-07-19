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
    var [gameStatus,setGameStatus]=useState("IN_PROGRESS");
    
    const correctWord="LIVES"
    
    var [wordIndex,setWordIndex]= useState(0);
    useEffect(() => {

    },[])


    function appendLetter(letter)
    {
    

    setWordIndex(prevCount => {
        let prevWordArray = [...wordInputs];
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
        const arrayColumn = (arr, n) => arr.map(x => x[n]);
        const lastWordEntered=arrayColumn(prevWordArray, ((prevCount)/5)>>0).join('').toUpperCase()
        setWordBackground(prevBackgroundArray);

        if(lastWordEntered===correctWord.toUpperCase())
        {
            setGameStatus("WON");
            console.log("game won");
            return(prevCount + 20)
        }
        else if(lastWordEntered!=correctWord.toUpperCase() && lastWordEntered.length==5 && ((prevCount)/5)>>0==4)
        {
            setGameStatus("LOST");
            console.log("game lost");
            
        }
        if(gameStatus==="IN_PROGRESS")
        {
        return(prevCount + 1)
        }
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
        <WordContext.Provider value={[wordInputs,setWordInputs,wordIndex,setWordIndex,appendLetter,removeLetter,wordBackground,setWordBackground,gameStatus]}>
            {children}
        </WordContext.Provider>
    )

}