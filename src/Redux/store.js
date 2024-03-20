import { configureStore } from "@reduxjs/toolkit";
import groceryReducer from "./itemSlice";
export const store = configureStore({
  reducer: {
    grocery: groceryReducer,
  },
});
