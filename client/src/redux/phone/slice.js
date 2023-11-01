import { createSlice } from "@reduxjs/toolkit";
import { fetchPhones } from "./asyncActions";

const initialState = {
  items: [],
  limit: 5,
  countPages: 1,
  status: "loading", // loading | succes | error
};

export const phoneSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload.phones;
    },
    setLimit: (state, action) => {
      state.limit = action.payload.limit;
    },
    setCountPages: (state, action) => {
      state.countPages = action.payload.countPages;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhones.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchPhones.fulfilled, (state, action) => {
        state.items = action.payload.phones;
        state.limit = action.payload.limit;
        state.countPages = action.payload.countPages;
        state.status = "success";
      })
      .addCase(fetchPhones.rejected, (state) => {
        state.status = "error";
        state.items = [];
      })
  },
});

export const { setItems, setLimit, setCountPages } = phoneSlice.actions;

export default phoneSlice.reducer;
