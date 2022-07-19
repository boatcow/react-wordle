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
  
export const GameModal = () => {
  const [words,setWordInputs,wordIndex,setWordIndex,appendLetter,removeLetter,wordBackground,setWordBackground,gameStatus]=useWord();

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
      <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
        You Lost!!!
      </Typography>
      <div className="App">
      <img src= {lost} alt="loading..." />

      </div>
      
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        
      </Typography>
    </Box>
  </Modal>
  
  )
}
}