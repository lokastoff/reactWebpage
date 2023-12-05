import { createSlice } from "@reduxjs/toolkit";

const initialState = false

export const isAuthSlice = createSlice({
    name:'isAuth',
    initialState: {
        isAuthenticated: false,
      },
    reducers:{

    }
})