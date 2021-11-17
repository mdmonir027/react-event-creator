import * as types from '../action/actionTypes';
const init = {
  user: {},
  errors: {},
  errorType: '',
};

const authReducer = (state = init, action) => {
  switch (action.type) {
    case types.SET_USER: {
      const { user } = action.payload;

      return {
        ...state,
        user,
        errors: {},
        errorType: '',
      };
    }
    case types.SET_AUTH_ERROR: {
      const { errors, type } = action.payload;
      return {
        ...state,
        errors,
        errorType: type,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
