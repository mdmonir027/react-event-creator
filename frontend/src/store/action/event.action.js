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

export const findPostForEdit = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/event/${id}`);
    const event = res.data;
    dispatch({
      type: types.SET_EVENT_FOR_EDIT,
      payload: {
        event,
      },
    });
  } catch (e) {
    console.log(e?.response.data);
    dispatch({
      type: types.SET_EVENT_ERROR,
      payload: {
        errors: e?.response?.data,
        errorType: 'edit',
      },
    });
  }
};

export const eventUpdate = (values, id, cb) => async (dispatch) => {
  try {
    const res = await axios.put(`/event/${id}`, values);
    const event = res.data;
    console.log(event);
    dispatch({
      type: types.UPDATE_EVENT,
      payload: {
        event,
      },
    });
    cb(true);
  } catch (e) {
    dispatch({
      type: types.SET_EVENT_ERROR,
      payload: {
        errors: e?.response?.data,
        errorType: 'e',
      },
    });
    cb(false);
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    console.log('delete event ', id);
    const res = await axios.delete(`/event/${id}`);
    console.log(res.data);

    dispatch({
      type: types.DELETE_EVENT,
      payload: {
        id,
      },
    });
  } catch (e) {
    dispatch({
      type: types.SET_EVENT_ERROR,
      payload: {
        errors: e?.response?.data,
        errorType: 'e',
      },
    });
  }
};
