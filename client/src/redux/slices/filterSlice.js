import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  currentPage: 1,
  countPages: 1,
  limit: 4,
  sort: {
    name: "popularity",
    sortProperty: "rating",
  }
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCountPages: (state, action) => {
      state.countPages = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setCurrentPage, setCountPages, setLimit } = filterSlice.actions;

export default filterSlice.reducer;
