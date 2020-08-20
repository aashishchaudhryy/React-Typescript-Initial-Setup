import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import {hot} from 'react-hot-loader/root';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

const app = (
  <HashRouter>
    <App />
  </HashRouter>
)

ReactDOM.render(app, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
