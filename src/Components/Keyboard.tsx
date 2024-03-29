import React, { useContext, useEffect, useState } from 'react'
import { Word } from './Word'
import styled from "styled-components";
import { useWord } from '../wordContext';
import { useSetWord } from '../wordContext';
import "react-simple-keyboard/build/css/index.css";

const Main = styled.main`
  font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;

  border-bottom: 1px solid #3a3a3c;

  font-weight: 700;
  font-size: 3.6rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;

const GameSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
const TileContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 5px;

  height: 420px;
  width: 350px;
`;
const TileRow = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`;
const Tile = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #3a3a3c;
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 3.2rem;
  text-transform: uppercase;

  user-select: none;
`;

const KeyboardSection = styled.section`
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const KeyboardRow = styled.div`
  width: 100%;
  margin: 0 auto 8px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const KeyboardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0 6px 0 0;
  height: 58px;
  flex: 1;

  border: 0;
  border-radius: 4px;
  background-color: #818384;
  font-weight: bold;
  text-transform: uppercase;
  color: #d7dadc;

  cursor: pointer;
  user-select: none;

  &:last-of-type {
    margin: 0;
  }
`;

export const KeyboardLayout = () => {
    const [words,setWordDetails,wordIndex,setWordIndex,appendLetter,removeLetter]=useWord();
    
    const UpdatedWords = words
    var [keyPress,setKeyPress]= useState(0);

      useEffect(() => {
        document.addEventListener('keydown',detectKeyDown,true)
        
      },[]);
    const detectKeyDown = (event) => {

       const keyPressed = (typeof event.key == 'undefined') ? event : event.key


       console.log("pressed option:",keyPressed);
       console.log("Key pressed: ",keyPressed)
       console.log("existing words: ",words)
       console.log("existing wordIndex: ",wordIndex)
       console.log("keyPress: ",keyPress)
       setKeyPress(prevCount => prevCount + 1);
       if(keyPressed.toUpperCase()=="BACKSPACE")
       {
        removeLetter();
       }
       else if(keyPressed.length === 1 && keyPressed.match(/[a-z]/i))
       {
        appendLetter(keyPressed);
       }
    };
    const keys1 = ["Q","W","E","R","T","Y","U","I","O","P"]
    const keys2 = ["A","S","D","G","H","J","K","L"]
    const keys3 = ["Z","X","C","V","B","N","M"]

    return(
       
        <Main>
          <br></br>
          <KeyboardSection>
            <KeyboardRow>
              {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((key) => (
                <KeyboardButton onClick={() => detectKeyDown(key)}>{key}</KeyboardButton>
              ))}
            </KeyboardRow>
            <KeyboardRow>
              {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((key) => (
                <KeyboardButton onClick={() => detectKeyDown(key)}>{key}</KeyboardButton>
              ))}
            </KeyboardRow>
            <KeyboardRow>
              {["z", "x", "c", "v", "b", "n", "m", "backspace"].map(
                (key) => (
                  <KeyboardButton onClick={() => detectKeyDown(key)}>{key}</KeyboardButton>
                )
              )}
            </KeyboardRow>
          </KeyboardSection>
        </Main>
      );

    
    
    

}