import { configureStore } from "@reduxjs/toolkit";

import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import phone from "./slices/phoneSlise";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    phone,
  },
});
