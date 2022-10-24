import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  accessToken: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
    },
  },
});

export const { userLogin } = loginSlice.actions;

export default loginSlice.reducer;
