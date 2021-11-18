import * as types from './actionTypes';
import axios from 'axios';
import { getToken } from 'utils/token';
import { message } from 'antd';
axios.defaults.headers.common['Authorization'] = getToken();

export const addUser = (values, cb) => async (dispatch) => {
  try {
    const res = await axios.post('/user', values);
    const user = res.data;
    dispatch({
      type: types.ADD_USER,
      payload: {
        user,
      },
    });

    cb(true);
  } catch (e) {
    console.log(e);
    dispatch({
      type: types.SET_USER_ERROR,
      payload: {
        errors: e?.response?.data,
        type: 'add',
      },
    });
    cb(false);
  }
};

export const getAllUser = () => async (dispatch) => {
  try {
    const res = await axios.get('/user');
    const users = res.data;
    dispatch({
      type: types.SET_ALL_USERS,
      payload: {
        users,
      },
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: types.SET_USER_ERROR,
      payload: {
        errors: e?.response?.data,
        type: 'add',
      },
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/user/${id}`);

    dispatch({
      type: types.DELETE_USER,
      payload: { id },
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: types.SET_USER_ERROR,
      payload: {
        errors: e?.response?.data,
        type: 'delete',
      },
    });
  }
};
