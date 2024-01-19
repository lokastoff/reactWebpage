import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

export const isAuthSlice = createSlice({
    name:'isAuth',
    initialState,
    reducers:{
      login: (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        console.log(state.isAuthenticated)
      },
      logout: (state) => {
        state.isAuthenticated = false;
        state.user = null;
      },
    }
})
export const { login, logout } = isAuthSlice.actions;
export default isAuthSlice.reducer;