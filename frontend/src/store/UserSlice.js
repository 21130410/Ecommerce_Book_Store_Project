import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null, 
    isAuthenticated: false, 
  },
  reducers: {
    logIn(state, action) {
      const userInfo = action.payload;
      state.userInfo = userInfo;
      state.isAuthenticated = true;
    },

    logOut(state) {
      state.userInfo = null;
      state.isAuthenticated = false;
    },

    updateUserInfo(state, action) {
      const updatedInfo = action.payload;
      if (state.userInfo) {
        state.userInfo = { ...state.userInfo, ...updatedInfo };
      }
    },
  },
});

const { actions, reducer } = userSlice;
export const { logIn, logOut, updateUserInfo } = actions; // Named exports for actions
export default reducer; // Default export for reducer
