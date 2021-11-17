import * as types from './actionTypes';
import axios from 'axios';
import { storeToken, getTokenData } from 'utils/token';
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
