import React, { useEffect } from "react";
import {
  fetchCustomers,
  deleteCustomers,
} from "../features/customers/customersSlice";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
export default function CustomerList() {
  // Call API
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCustomers());
  }, []);
  const customerList = useSelector((state) => state.customers);
  console.log(customerList.customers);
  const [customer, setCustomer] = useState([]);

  const handleDeleteCustomer = (id) => {
    dispatch(deleteCustomers(id));
  }
  return (
    <div>
      <h1 className="my-5 text-white">CUSTOMER LIST</h1>
      <div className="card m-auto">
        <table className="table table-striped table-borderless table-light ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">Phone</th>
              <th scope="col">Feature</th>
            </tr>
          </thead>
          <tbody>
            {customerList.customers.map((customer, index) => (
              <tr key={index}>
                <th scope="row">{customer.id}</th>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.address}</td>
                <td>{customer.city}</td>
                <td>{customer.phone}</td>
                <td>
                  <Link
                    type="button"
                    className="btn btn-success mx-3"
                    to={`/customerForm/edit/${customer.id}`}
                  >
                    Edit
                  </Link>
                  <div className="d-inline-block">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={(e) => handleDeleteCustomer(customer.id, e)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
