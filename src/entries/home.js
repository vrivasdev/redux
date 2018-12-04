import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/data';
import Home from '../pages/containers/home';
import data from '../schemas/index.js';

console.log(data);

const initialState = {
  data: {
    entities: data.entities,
    categories: data.result.categories,
  },
  search: []
}

const store = createStore(
  reducer, // reducer
  initialState , // initial state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // enhancer
);

const homeContainer = document.getElementById('home-container')

render(
  <Provider store={store}>
    <Home />
  </Provider>
, homeContainer);
