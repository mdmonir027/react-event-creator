import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import { getToken, getTokenData } from 'utils/token';
import * as types from 'store/action/actionTypes';
if (getToken()) {
  store.dispatch({
    type: types.SET_USER,
    payload: {
      user: getTokenData(),
    },
  });
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
