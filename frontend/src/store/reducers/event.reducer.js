import * as types from '../action/actionTypes';

const init = {
  events: [],
  errors: {},
  errorType: '',
};

const eventReducer = (state = init, action) => {
  switch (action.type) {
    case types.ADD_EVENT: {
      const { event } = action.payload;
      return {
        events: [...state.events, event],
        errorType: '',
        errors: {},
      };
    }
    case types.SET_EVENT_ERROR: {
      const { errors, errorType } = action.payload;
      return {
        ...state,
        errorType,
        errors,
      };
    }
    default:
      return state;
  }
};

export default eventReducer;
