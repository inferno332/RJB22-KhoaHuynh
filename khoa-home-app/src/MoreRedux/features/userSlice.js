import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  status: "",
};
let url = "https://62d16f46d4eb6c69e7dd5d81.mockapi.io/suppliers/";
// Fetch
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.log(error));
});
// Delete
const deleteUsers = createAsyncThunk("user/deleteUsers", (id) => {
  return axios
    .delete(url + id)
    .then((response) => response.data)
    .catch((error) => console.log(error));
});
// Update
const createUsers = createAsyncThunk("user/createUsers", (data) => {
    return axios
    .post(url, data)
    .then((response) => response.data)
    .catch((error) => console.log(error));
})
// Slices
const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUsers: (state, action) => {
      const usersAfterDeleted = state.users.filter((element) => {
        return element.id !== action.id;
      });
      return (state.users = usersAfterDeleted);
    },
  },
  extraReducers: (builder) => {
    // Xử lý trong reducer với case pending / fulfilled / rejected
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error;
      })
      //   Delete
      .addCase(deleteUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteUsers.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
      })
      .addCase(deleteUsers.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error;
      });
  },
});

export { fetchUsers, deleteUsers, createUsers };
export default usersSlice.reducer;
