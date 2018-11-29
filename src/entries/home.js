import React from 'react';
import data from '../api.json';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from '../pages/containers/home';
import reducer from '../reducers/data';

const initialState = {
  data: {
    ...data,
    search: []
  }
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
