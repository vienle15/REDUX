import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import ProductReducer from "../slice/productSlice";
export const store = configureStore({
  reducer: {
    products: ProductReducer,
  },
});
