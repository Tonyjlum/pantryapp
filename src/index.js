import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const reducer = (state = {currentLocation: 1, currentItems: [], locations: [], cart: []}, action) => {
  switch(action.type) {
    case "UPDATE_CURRENT_LOCATION":
      return {...state, currentLocation: action.payload}
    case "UPDATE_CURRENT_ITEMS":
      return {...state, currentItems: action.payload}
    case "INITIAL_CART":
      return {...state, cart: action.payload}
    case "ADDED_TO_CART":
      return {...state, cart: [...state.cart, action.payload]}
    case "ADD_LOCATIONS_TO_STORE":
      return {...state, locations: action.payload}
    case "UPDATE_CART_AFTER_CHANGE":
      return {...state, cart: action.payload}
    default:
      return state
  }
}
const store = createStore(reducer)

store.subscribe( () => {
  console.log(`the new state is`, store.getState())
  console.log(`----------------`)
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
