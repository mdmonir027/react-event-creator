import * as types from '../action/actionTypes';

const init = {
  events: [],
  errors: {},
  errorType: '',
  event: {},
};

const eventReducer = (state = init, action) => {
  switch (action.type) {
    case types.ADD_EVENT: {
      const { event } = action.payload;
      return {
        ...state,
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
    case types.SET_ALL_EVENTS: {
      const { events } = action.payload;
      return {
        ...state,
        events,
        errorType: '',
        errors: {},
      };
    }
    case types.SET_EVENT_FOR_EDIT: {
      const { event } = action.payload;
      return {
        ...state,
        event,
      };
    }
    case types.UPDATE_EVENT: {
      const { event } = action.payload;
      const events = state.events.map((item) => {
        if (item.id === event.id) return event;
        return item;
      });
      return {
        ...state,
        event: {},
        events,
      };
    }
    default:
      return state;
  }
};

export default eventReducer;
