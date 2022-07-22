import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductForm() {
  let { id } = useParams();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  // fetch Customers Form from List
  let url = "https://62d16f46d4eb6c69e7dd5d81.mockapi.io/products/";
  let urlProduct = "https://62d16f46d4eb6c69e7dd5d81.mockapi.io/products/" + id;
  async function fetchDataCustomerList(urlProduct) {
    try {
      let response = await axios.get(urlProduct);
      let tempProducts = await response.data;
      console.log(id);
      if (id) {
        setValue("color", tempProducts?.color);
        setValue("price", tempProducts?.price);
        setValue("description", tempProducts?.description);
      }
      return tempProducts;
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    if (id) {
      let tempProducts = fetchDataCustomerList(urlProduct);
      tempProducts.then((response) => response);
    }
  }, []);

  const onSubmit = (data, e) => {
    e.preventDefault();
    if (id) {
      //update
      putData(data);
      console.log("update", data);
    } else {
      //create
      postData(data);
      console.log("create", data);
    }
  };

  const postData = (data) => {
    axios
      .post(url, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const putData = (data) => {
    axios
      .put(urlProduct, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <h1 className="my-5">PRODUCT FORM</h1>
      <div className="w-50 m-auto mt-5">
        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-floating col-6">
            <input
              className="form-control"
              placeholder="Color"
              type="text"
              {...register("color", {
                required: true,
              })}
            />
            <label className="mx-2 form-label">Color</label>
            {errors.color && <p>This field is required</p>}
          </div>

          <div className="form-floating col-6">
            <input
              className="form-control"
              placeholder="Price"
              type="text"
              {...register("price", {
                required: true,
              })}
            />
            <label className="mx-2 form-label">Price</label>
            {errors.price && <p>This field is required</p>}
          </div>

          <div className="form-floating col-12">
            <input
              className="form-control"
              placeholder="Description"
              type="text"
              {...register("description", {
                required: true,
              })}
            />
            <label className="mx-2 form-label">Description</label>
            {errors.description && <p>This field is required</p>}
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
