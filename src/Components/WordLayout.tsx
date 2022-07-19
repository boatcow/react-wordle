import React, { useContext, useEffect } from 'react'
import { Word } from './Word'
import styled from "styled-components";
import { useWord } from '../wordContext';
import '../App.css';

const Layout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: -1;
  text-align: center;
  background-color: #000000;  
`;

const WordContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 5px;
  height: 420px;
  width: 350px;
  display: flex;
justify-content:center; // centers in the flex direction and the default flex-direction is row
`;
const TileRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
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
  color: white;
  text-transform: uppercase;
  background: ${props => (props.currRow < props.maxRow) && props.inputColor || ""};
`;

export const WordLayout = () => {
  const [words,setWordInputs,wordIndex,setWordIndex,appendLetter,removeLetter,wordBackground,setWordBackground,gameStatus,correctWordLength,correctWordMeaning]=useWord();
  console.log("words: ",words);
  console.log("wordBackground: ",wordBackground);
  console.log("correctWordLength: ",correctWordLength);
  const maxCol=wordIndex%correctWordLength
  const maxRow=(wordIndex/correctWordLength)>>0
  console.log("maxRow: ",maxRow);
  console.log("correctWordLength: ",correctWordLength,": ::",setWordBackground,gameStatus,correctWordMeaning)
  const gridDefault=Array.from(Array(correctWordLength).keys())
  console.log("Array.from(Array(correctWordLength).keys(): ",gridDefault)
  console.log(words,wordIndex,wordBackground,gameStatus,correctWordLength,correctWordMeaning)
  // console.log("---------------------------: ")

  // console.log("words: ",words)

  // for (let i = 0; i < correctWordLength; i++) {
  //   for (let j = 0; j < 3; j++) {
  //     console.log(i," , ",j)
  //     console.log(words[i][j])
  //   }

  // }
  // console.log("---------------------------: ")

  return (
    <div>
      <header className='header'>
          <h2  style={{ color: '#CD5C5C' }}>Word Meaning : {correctWordMeaning}</h2>
      </header>
      <div className="App">
      <p>{wordIndex}</p>
        <Layout>
          <WordContainer>
          {(gridDefault).map((i) => (
            <TileRow key={i}>
              
              {[0, 1, 2,3,4].map((j) => (
                <Tile key={j} inputColor={wordBackground[i][j]} maxRow={maxRow} maxCol={maxCol} currRow={j} currColumn={i}>{words[i][j]}</Tile>
              ))}
            </TileRow>
          ))}
        </WordContainer>
        </Layout>
        
      </div>

    </div>
  )
}