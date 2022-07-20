import React, { useContext, useEffect } from 'react'
import { Word } from './Word'
import styled from "styled-components";
import { useWord } from '../wordContext';
import { Box, Modal, Typography } from '@mui/material';
import won from '../won.gif'
import lost from '../lost.gif'

import '../App.css';

const modal = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
function refreshPage(){ 
    window.location.reload(); 
}
const ReloadButton = styled.button`
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0 6px 0 0;
  height: 30px;
  flex: 1;
  display: inline-flex;
  justify-content: center;
  border: 0;
  border-radius: 4px;
  background-color: #008000;
  font-weight: bold;
  text-transform: uppercase;
  color: #d7dadc;
  position: absolute;
  top: 90%;
  left: 90%
  -ms-transform: translateY(-10%);
  transform: translateY(-10%);

  -ms-transform: translateX(10%);
  transform: translateX(90%);
  }
`;
  
export const GameModal = () => {
  // const [words,setWordInputs,wordIndex,setWordIndex,appendLetter,removeLetter,wordBackground,setWordBackground,gameStatus]=useWord();
  const [words,setWordInputs,wordIndex,setWordIndex,appendLetter,removeLetter,wordBackground,setWordBackground,gameStatus,correctWordLength,correctWordMeaning,correctWord]=useWord();

  if(gameStatus=="WON")
  { 
  return (
    <Modal
    open={true}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={modal}>
      <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
        You Won!!!
      </Typography>
      <div className="App">
      <img src= {won} alt="loading..." />

      </div>
      
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        
      </Typography>
      <ReloadButton type="button" onClick={ refreshPage }> <span>Try another word</span> </ReloadButton> 

    </Box>
  </Modal>
  )
}
  else if(gameStatus=="LOST")
  { 
  return (
    <Modal
    open={true}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={modal}>
      <Typography id="modal-modal-title" variant="h6" component="h1" align="center">
        You Lost!!!
      </Typography>
      <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
      Correct word: {correctWord}
      </Typography>

      <div className="App">
      <img src= {lost} alt="loading..." />

      </div>
      
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        
      </Typography>
      <ReloadButton type="button" onClick={ refreshPage }> <span>Try another word</span> </ReloadButton> 

    </Box>
  </Modal>
  
  )
}
}