import * as types from './actionTypes';
import axios from 'axios';
import { getToken } from 'utils/token';
axios.defaults.headers.common['Authorization'] = getToken();

export const eventAdd = (values, cb) => async (dispatch) => {
  try {
    const res = await axios.post('/event', values);
    const event = res.data;

    dispatch({
      type: types.ADD_EVENT,
      payload: {
        event,
      },
    });
    cb(true);
  } catch (e) {
    console.log(e?.response.data);
    dispatch({
      type: types.SET_EVENT_ERROR,
      payload: {
        errors: e?.response?.data,
        errorType: 'add',
      },
    });
    cb(false);
  }
};

export const fetchAllEvents = () => async (dispatch) => {
  try {
    const res = await axios.get('/event');

    dispatch({
      type: types.SET_ALL_EVENTS,
      payload: {
        events: res.data,
      },
    });
  } catch (e) {
    console.log(e?.response.data);
    dispatch({
      type: types.SET_EVENT_ERROR,
      payload: {
        errors: e?.response?.data,
        errorType: 'all',
      },
    });
  }
};
