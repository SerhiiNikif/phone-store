import { createSlice } from "@reduxjs/toolkit";

import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { getCartFromLS } from "../../utils/getCartFromLS";

const {items, totalPrice} = getCartFromLS();

const initialState = {
  totalPrice,
  items,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find((obj) => obj._id === action.payload._id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj._id === action.payload);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((obj) => obj._id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
