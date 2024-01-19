import { configureStore } from "@reduxjs/toolkit";
import authReducer from './isauth/isAuthSlice';

export const store = configureStore({
    reducer:{
        auth: authReducer,
    },
    devTools: true
})