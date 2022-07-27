import React, { useEffect } from "react";
import { fetchUsers, deleteUsers } from "../features/userSlice";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function List() {
  const dispatch = useDispatch();
  // Call API
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  // return users state
  const usersList = useSelector((state) => state.user.users);
  console.log(usersList);
  // Handle delete
  const handleDeleteUser = (id) => {
    dispatch(deleteUsers(id));
  };
  return (
    <div className="card m-auto">
      <table className="table table-striped table-borderless table-light">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => {
            return (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.branch}</td>
                <td>{user.address}</td>
                <td>
                  <div className="d-inline-block">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={(e) => handleDeleteUser(user.id, e)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
