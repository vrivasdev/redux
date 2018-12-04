import React from 'react';
import data from '../api.json';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/data';
import Home from '../pages/containers/home';
import normalizedData from '../schemas/index.js';

console.log("______ normalized data _____");
console.log(normalizedData);
console.log("_____________________");

const initialState = {
  data: {
    ...data
  },
  search: []
}

const store = createStore(
  reducer, // reducer
  initialState , // initial state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // enhancer
);

console.log(store.getState());

const homeContainer = document.getElementById('home-container')

render(
  <Provider store={store}>
    <Home />
  </Provider>
, homeContainer);
