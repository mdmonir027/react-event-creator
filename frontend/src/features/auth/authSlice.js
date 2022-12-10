import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isAuthenticated: false,
  me: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    setMe: (state, action) => {
      state.me = action.payload;
    },
    userLoggedOut: (state) => {
      state.isAuthenticated = false;
      state.user = {};
    },
  },
});

export const { userLoggedIn, userLoggedOut, setMe } = authSlice.actions;
export default authSlice.reducer;
