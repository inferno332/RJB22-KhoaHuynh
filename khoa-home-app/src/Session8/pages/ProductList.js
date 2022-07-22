import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Alert } from "@mui/material";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = React.useState(false);
  let url = "https://62d16f46d4eb6c69e7dd5d81.mockapi.io/products/";
  async function fetchData() {
    try {
      let response = await axios.get(url);
      let tempProducts = await response.data;
      setProducts(tempProducts);
      console.log(products);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }
  // Load data 1st time
  useEffect(() => {
    fetchData();
  }, []);

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
    <div>
      <h1 className="my-5">PRODUCT LIST</h1>
      <table className="table table-borderless table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Color</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Feature</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>
                <span
                  style={{ backgroundColor: `${product.color}` }}
                  class="dot"
                ></span>{" "}
                {product.color}
              </td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                <Link
                  type="button"
                  className="btn btn-success mx-3"
                  to={`/productForm/edit/${product.id}`}
                >
                  Edit
                </Link>
                <div className="d-inline-block">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={(e) => deleteData(product.id, e)}
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
    </div>
  );
}
