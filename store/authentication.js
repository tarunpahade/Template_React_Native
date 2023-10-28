import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: {
    email: "",
    password:''
  },
};

export const accountSlice = createSlice({
  name: "User Login",
  initialState,
  reducers: {
    setAccount: (state, action) => {
      state.account = action.payload;
    },
    logout: (state, action) => {
      state.account = initialState;
    },
  },
});

export const { setAccount, logout } = accountSlice.actions;
