import React from 'react';
import './App.css';
import Sharedheader from './components/sharedheader'
import SharedFooter from './components/SharedFooter'
function App() {
  return (
   
    <div className="container-fluid">
      <Sharedheader />
    
        <p>
        My first React website! :) VillagerBoy
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SharedFooter/>
        </div>
  );
}

export default App;
