import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  customers: [],
  status: "idle",
};

// Generates pending, fulfilled and rejected action types
export const fetchCustomers = createAsyncThunk("customer/addCustomer", () => {
  return axios
    .get("https://62d16f46d4eb6c69e7dd5d81.mockapi.io/customers/")
    .then((response) => response.data);
});
// Delete
export const deleteCustomers = createAsyncThunk(
  "customer/delCustomer",
  (id) => {
    return axios
      .delete("https://62d16f46d4eb6c69e7dd5d81.mockapi.io/customers/" + id)
      .then((response) => response.data);
  }
);

// Slices
export const customersSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    // addCustomer: (state, action) => {
    //   state.customers.push(action.payload);
    // },
    delCustomer: (state, action) => {
      const customersAfterDeleted = state.customers.filter((element) => {
        return element.id !== action.id;
      });
      return state.customers = customersAfterDeleted;
    },
  },
  extraReducers: (builder) => {
    // Xử lý trong reducer với case pending / fulfilled / rejected
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.status = "idle";
        state.customers = (action.payload);
      });
  },
});
// Actions
export default customersSlice.reducer;
export const selectCustomer = (state) => state.customer;
