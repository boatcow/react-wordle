import React, { useContext, useEffect, useState } from 'react'
import { Word } from './Word'
import styled from "styled-components";
import { useWord } from '../wordContext';
import { useSetWord } from '../wordContext';


export const KeyboardLayout = () => {
    const [words,setWordDetails,wordIndex,setWordIndex,appendLetter,removeLetter]=useWord();
    
    const UpdatedWords = words
    var [keyPress,setKeyPress]= useState(0);

      useEffect(() => {
        document.addEventListener('keydown',detectKeyDown,true)
        
      },[]);
    const detectKeyDown = (event) => {
       console.log("Key pressed: ",event.key)
       console.log("existing words: ",words)
       console.log("existing wordIndex: ",wordIndex)
       console.log("keyPress: ",keyPress)
       setKeyPress(prevCount => prevCount + 1);
       if(event.key=="Backspace")
       {
        removeLetter();
       }
       else if(event.key.length === 1 && event.key.match(/[a-z]/i))
       {
        appendLetter(event.key);
       }
    };
    return(
        <p>{keyPress}</p>
    )
    

}