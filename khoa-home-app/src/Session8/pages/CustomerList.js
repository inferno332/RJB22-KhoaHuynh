import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Alert } from "@mui/material";

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [pageNum, setPageNum] = useState(1);
  let url = "https://62d16f46d4eb6c69e7dd5d81.mockapi.io/customers/";
  async function fetchData() {
    try {
      let response = await axios.get(url, {
        params: {
          page: pageNum,
          limit: 10,
        },
      });
      console.log(pageNum);
      let tempCustomers = await response.data;
      setCustomers(tempCustomers);
      console.log(customers);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }
  // Load data 1st time
  useEffect(() => {
    fetchData();
  }, [pageNum]);

  const deleteData = (id) => {
    axios
      .delete(url + id)
      .then(function (response) {
        setOpen(true);
        fetchData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Toast message
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
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
            {customers.map((customer, index) => (
              <tr key={customer.id}>
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
                      onClick={(e) => deleteData(customer.id, e)}
                    >
                      Delete
                    </button>
                    <Snackbar
                      open={open}
                      autoHideDuration={3000}
                      message="Delete Successful"
                      variant="outlined"
                      action={action}
                    >
                      <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{ width: "100%" }}
                      >
                        Successfully deleted!
                      </Alert>
                    </Snackbar>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav className="mt-3">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button
                onClick={() => {
                  pageNum > 1 && setPageNum(pageNum - 1);
                }}
                className="page-link"
              >
                Previous
              </button>
            </li>
            <li className="page-item">
              <button
                onClick={() => {
                  customers.length == 10 && setPageNum(pageNum + 1);
                }}
                className="page-link"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
