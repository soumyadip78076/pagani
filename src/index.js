import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './JsFiles/Login';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Login/>
  </BrowserRouter>,
  document.getElementById('root')
);

