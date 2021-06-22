import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'

import allReducer from './reducer'

let globalState = createStore(allReducer, {}, applyMiddleware(ReduxThunk))

globalState.subscribe(() => console.log("Global State : ", globalState.getState()))


ReactDOM.render(
  <Provider store={globalState}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

