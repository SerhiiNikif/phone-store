import { createSlice } from "@reduxjs/toolkit";

import { fetchAuth } from "./asyncActions";
import { getUserFromLS } from "../../utils/getUserFromLS";

const {email, isAuth} = getUserFromLS();

const initialState = {
  email,
  isAuth,
  status: "loading",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: (state) => {
      state.email = "";
      state.isAuth = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.status = "loading";
        state.email = "";
        state.isAuth = false;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        const {email} = action.payload.user;
        state.email = email;
        state.isAuth = true;
        state.status = "success";
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.status = "error";
        state.email = "";
        state.isAuth = false;
      })
  },
});

export const { removeUser } = userSlice.actions;

export default userSlice.reducer;
