import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser}};
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }
    window.store = store
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});