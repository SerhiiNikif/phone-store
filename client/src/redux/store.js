import { configureStore } from "@reduxjs/toolkit";

import filter from "./filter/slice";
import cart from "./cart/slice";
import phone from "./phone/slice";
import user from "./user/slice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    phone,
    user,
  },
});
