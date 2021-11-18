import * as types from './actionTypes';
import axios from 'axios';
import { storeToken, getTokenData } from 'utils/token';
import { message } from 'antd';

export const loginAction =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      const res = await axios.post('/auth/login', { username, password });
      const { token } = res.data;
      storeToken(token);
      const user = getTokenData();
      dispatch({
        type: types.SET_USER,
        payload: { user },
      });
    } catch (e) {
      console.log(e?.response?.data);
      dispatch({
        type: types.SET_AUTH_ERROR,
        payload: {
          type: 'login',
          errors: e?.response?.data,
        },
      });
    }
  };

export const findMe = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/auth/me');
    dispatch({
      type: types.SET_AUTH_ME,
      payload: {
        me: data,
      },
    });
  } catch (e) {
    console.log(e?.response?.data);
    dispatch({
      type: types.SET_AUTH_ERROR,
      payload: {
        type: 'me',
        errors: e?.response?.data,
      },
    });
  }
};

export const updateUserFullName = (name, cb) => async (dispatch) => {
  try {
    const { data } = await axios.post('/auth/me/name', { name });

    dispatch({
      type: types.SET_AUTH_USER_NAME,
      payload: { name },
    });
    message.success({
      content: data.message,
      style: {
        marginTop: '10vh',
      },
    });
  } catch (e) {
    console.log(e?.response?.data);

    message.error({
      content: 'Error try again!',
      style: {
        marginTop: '10vh',
      },
    });
  }
};
