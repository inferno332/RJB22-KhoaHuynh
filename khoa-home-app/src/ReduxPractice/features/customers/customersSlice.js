import { createSlice } from "@reduxjs/toolkit";

// Slices
const customersSlice = createSlice ({
    name: 'customers',
    initialState: [],
    reducers: {
        delCustomer(state, action){},
        editCustomer(state, action){},
        loadingCustomer(state, action){},
    }
})
// Actions
export const { delCustomer, editCustomer, loadingCustomer } = customersSlice.actions
// Reducers
export default customersSlice.reducer