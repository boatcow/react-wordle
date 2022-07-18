import React, { useState } from 'react';
import './App.css';
import { WordLayout } from './Components/WordLayout.tsx'
import { WordProvider } from './wordContext';

function App(){
  return (
    <div className="App">
      <h1>Wordle</h1>
      <div>
      <WordProvider>
      <WordLayout></WordLayout>
      </WordProvider>
    
      </div>

    </div>
  )
}

export default App;