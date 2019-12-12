import React from 'react';
import './App.css';
import Sharedheader from './components/sharedheader'
import SharedFooter from './components/SharedFooter'
import Index from './components/index'
function App() {
  return (
   
    <div className="container-fluid">
      <Sharedheader />
    <Index/>
       
        <SharedFooter/>
        </div>
  );
}

export default App;
