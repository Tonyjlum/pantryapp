import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationContainer from './container/locationContainer.js'
import ItemContainer from './container/itemContainer.js'
import NavBar from "./component/navbar.js"

function App() {
  return (
    <div className="app">
      <NavBar />
      <LocationContainer />
      <ItemContainer />
    </div>
  );
}

export default App;
