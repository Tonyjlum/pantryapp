import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationContainer from './container/locationContainer.js'
import ItemContainer from './container/itemContainer.js'
import NavBar from "./component/navbar.js"
import { connect } from 'react-redux'

function App() {
  return (
    <div className="app">
      <NavBar />
      <LocationContainer />
      <ItemContainer />
    </div>
  );
}

// export default App;
const mapDispatchToProps = {
  // addLoginAccountToStore: (account) => ({type: "ADD_LOGIN_ACCOUNT_TO_STORE", payload: account}),
  // markSponsorInStore: () => ({
  //   type:"LOGGED_IN_AS_SPONSOR"
  // })
}

export default connect(null, mapDispatchToProps)(App);
