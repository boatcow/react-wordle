import React, { useContext } from 'react'
import { Word } from './Word'
import styled from "styled-components";
import { useWord } from '../wordContext';
const Layout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  text-align: center;
  background-color: #000000;  
`;

const WordContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 5px;
  height: 420px;
  width: 350px;
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
`;

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  solution: string
  guesses: string[]
  isRevealing?: boolean
}

export const WordLayout = ({
  onChar,
  onDelete,
  onEnter,
  solution,
  guesses,
  isRevealing,
}: Props) => {
  console.log("useWord: ",useWord);

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Layout>
          <WordContainer>
          {[0, 1, 2, 3, 4].map((i) => (
            <TileRow key={i}>
              {[0, 1, 2, 3, 4].map((j) => (
                <Tile key={j}>{i}{j}</Tile>
              ))}
            </TileRow>
          ))}
        </WordContainer>
        </Layout>
        
      </div>
    </div>
  )
}