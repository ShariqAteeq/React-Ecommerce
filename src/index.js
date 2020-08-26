import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import cartReducer from './reducer/cartReducer';
import { createStore } from 'redux';

const store = createStore(cartReducer);

const app = (
  <Provider store = {store}>
    <App />
  </Provider>
);

ReactDOM.render( app, document.getElementById('root'));

