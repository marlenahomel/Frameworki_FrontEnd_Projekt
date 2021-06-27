import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import {Provider} from 'react-redux';

import store from './tools/store';
import MainPage from './components/MainPage/MainPage';


ReactDOM.render(
  <Provider store = {store}>
    <Reset />
    <MainPage />
  </Provider>,
  document.getElementById('root')
);


