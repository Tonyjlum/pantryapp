import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationContainer from './container/locationContainer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LocationContainer />
      </header>
    </div>
  );
}

export default App;
