import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import App from './App';
// import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';

ReactDOM.render(
  // <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  // </Provider>,
  document.getElementById('root')
);
