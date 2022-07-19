import React, { useState } from 'react';
import './App.css';
import { WordLayout } from './Components/WordLayout.tsx'
import { WordProvider } from './wordContext';
import { KeyboardLayout } from './Components/Keyboard.tsx'
import { GameModal } from './Components/GameModal.tsx'
import { Box, Button, Modal, Typography } from '@mui/material';



function App(){
  React.useEffect(() => {
    // Dumb hack
    document.body.style.backgroundColor = "#000000"

  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <div className="App">
        <header className='header'>
          <h1>Wordle GRE</h1>
        </header>
      <div>
      <WordProvider>
      <WordLayout></WordLayout>
      <KeyboardLayout></KeyboardLayout>
      <GameModal></GameModal>
      </WordProvider>


      </div>

    </div>
  )
}


export default App;