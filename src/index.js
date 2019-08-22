import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const reducer = (state = {currentLocation: 1}, action) => {
  switch(action.type) {
    case "UPDATE_CURRENT_LOCATION":
      return {...state, currentLocation: action.payload}
    case "ADD_ALL_ITEMS_TO_STORE":
      return {...state, allItems: action.payload}
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
