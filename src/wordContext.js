import React, {useContext, useEffect, useState} from 'react';
import { ThemeContext } from 'styled-components';
// import {fs} from 'fs';
import {wordBank} from './WordBank'
import Papa from "papaparse";

const WordContext = React.createContext();
const UpdateWordContext = React.createContext();

export function useWord() {
    return useContext(WordContext)
}
export function useSetWord() {
    return useContext(UpdateWordContext)
}

const fetchRandomWord = async() => {
    const randomChoice=Math.floor(Math.random() * 100);
    fetch(wordBank)
    .then((response)=>response.text())
    .then((result)=>{
        console.log(result.split('\n'));
    });
    return
}
export function WordProvider({ children }) {
    
    const randomChoice=Math.floor(Math.random() * 100);

    var [wordInputs,setWordInputs]=useState(
        [['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','','']]
        );
    var [wordBackground,setWordBackground]=useState(
        [['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','',''],['','','','','','','','','','','','','','','','','','','','']]
        );
    var [gameStatus,setGameStatus]=useState("IN_PROGRESS");
    var [correctWord,setCorrectWord]=useState(wordBank[randomChoice].split("-")[0].toUpperCase())
    var [correctWordMeaning,setCorrectWordMeaning]=useState(wordBank[randomChoice].split("-")[1])
    var [correctWordLength,setCorrectWord]=useState(wordBank[randomChoice].split("-")[0].length)
    
    var [wordIndex,setWordIndex]= useState(0);
    console.log("correctWord:",correctWord)
    console.log("correctWordMeaning:",correctWordMeaning)
    console.log("THE correctWordLength:",correctWordLength)



    function appendLetter(letter)
    {
    

    setWordIndex(prevCount => {
        let prevWordArray = [...wordInputs];
        prevWordArray[prevCount%correctWordLength][(prevCount/correctWordLength)>>0]=letter
        setWordInputs(prevWordArray);

        let prevBackgroundArray = [...wordBackground];
        
        if(prevWordArray[prevCount%correctWordLength][(prevCount/correctWordLength)>>0].toUpperCase() == correctWord[prevCount%correctWordLength].toUpperCase())
        {
            prevBackgroundArray[prevCount%correctWordLength][(prevCount/correctWordLength)>>0]="green"
        }
        else if(correctWord.includes(letter.toUpperCase()))
        {
            prevBackgroundArray[prevCount%correctWordLength][(prevCount/correctWordLength)>>0]="orange"
        }
        const arrayColumn = (arr, n) => arr.map(x => x[n]);
        const lastWordEntered=arrayColumn(prevWordArray, ((prevCount)/correctWordLength)>>0).join('').toUpperCase()
        setWordBackground(prevBackgroundArray);

        if(lastWordEntered===correctWord.toUpperCase())
        {
            setGameStatus("WON");
            console.log("game won");
            return(prevCount + 100)
        }
        else if(lastWordEntered!=correctWord.toUpperCase() && prevCount==(correctWordLength*5-1))
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
        if((prevCount)%correctWordLength==0)
        {
            return(prevCount)
        }
        prevArray[(prevCount-1)%correctWordLength][((prevCount-1)/correctWordLength)>>0]=''
        setWordInputs(prevArray);

        let prevBackgroundArray = [...wordBackground];
        
        prevBackgroundArray[prevCount%correctWordLength][(prevCount/correctWordLength)>>0]=""
        
 
        return(prevCount-1)
    });
    }

    function setColorMapping(letter)
    {
    setWordIndex(prevCount => {
        let prevArray = [...wordInputs];
        prevArray[(prevCount-1)%correctWordLength][((prevCount-1)/correctWordLength)>>0]=''
        setWordInputs(prevArray);
        return(prevCount-1)
    });
    }
    
    
    return (
        <WordContext.Provider value={[wordInputs,setWordInputs,wordIndex,setWordIndex,appendLetter,removeLetter,wordBackground,setWordBackground,gameStatus,correctWordLength,correctWordMeaning,correctWord]}>
            {children}
        </WordContext.Provider>
    )

}