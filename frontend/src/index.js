import 'antd/dist/antd.css';
import { userLoggedIn } from 'features/auth/authSlice';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { getToken, getTokenData } from 'utils/token';
import App from './App';
import { store } from './app/store';
import './index.css';
if (getToken()) {
  store.dispatch(userLoggedIn(getTokenData()));
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
