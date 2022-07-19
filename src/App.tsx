import React, { useState } from 'react';
import './App.css';
import { WordLayout } from './Components/WordLayout.tsx'
import { WordProvider } from './wordContext';
import { KeyboardLayout } from './Components/Keyboard.tsx'
function App(){
  return (
    <div className="App">
      <h1>Wordle</h1>
      <div>
      <WordProvider>
      <WordLayout></WordLayout>
      <KeyboardLayout></KeyboardLayout>
      </WordProvider>
      
    
      </div>

    </div>
  )
}

export default App;