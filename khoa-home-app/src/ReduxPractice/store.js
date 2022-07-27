import { configureStore } from "@reduxjs/toolkit";
import customersSlice from "./features/customers/customersSlice";

export const store = configureStore({
  reducer: {
    customer: customersSlice
  },
});
