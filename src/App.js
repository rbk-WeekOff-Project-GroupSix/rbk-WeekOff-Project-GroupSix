import React from 'react';
import './App.css';
import AddTransaction from "./Components/AddTransaction/AddTransaction"


function App() {
  return (
    <div className="App">
     <h1> Expenses Tracker </h1>
      <AddTransaction/>
      
    </div>
  );
}

export default App;
