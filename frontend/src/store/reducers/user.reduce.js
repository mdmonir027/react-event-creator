import * as types from '../action/actionTypes';

const init = {
  users: [],
  errors: {},
  type: '',
};

const userReducer = (state = init, action) => {
  switch (action.type) {
    // case types.SET_USERS: {
    //   const { users } = action.payload;
    //   return {
    //     ...state,
    //     users,
    //     errors: {},
    //     type: '',
    //   };
    // }
    case types.ADD_USER: {
      const { user } = action.payload;
      const users = [...state.users, user];

      return {
        ...state,
        users,
        errors: {},
        type: '',
      };
    }
    case types.SET_USER_ERROR: {
      const { errors, type } = action.payload;
      return {
        ...state,
        errors,
        type,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
