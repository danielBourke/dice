import React from 'react';
import './App.css';
import RollDice from './RollDice';

function App() {
  return (
    <div className="App">
    <div className="flex-container">
     <RollDice sides={["one","two","three","four","five","six"]} />
     </div>
    </div>
  );
}

export default App;
