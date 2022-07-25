import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CustomerForm() {
  let { id } = useParams();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  // fetch Customers Form from List
  let url = "https://62d16f46d4eb6c69e7dd5d81.mockapi.io/customers/";
  let urlCustomer =
    "https://62d16f46d4eb6c69e7dd5d81.mockapi.io/customers/" + id;
  async function fetchDataCustomerList(urlCustomer) {
    try {
      let response = await axios.get(urlCustomer);
      let tempCustomers = await response.data;
      console.log(id);
      if (id) {
        setValue("name", tempCustomers?.name);
        setValue("mail", tempCustomers?.email);
        setValue("address1", tempCustomers?.address);
        setValue("phone", tempCustomers?.phone);
        setValue("city", tempCustomers?.city);
        setValue("postcode", tempCustomers?.postCode);
      }
      return tempCustomers;
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    if (id) {
      let tempCustomers = fetchDataCustomerList(urlCustomer);
      tempCustomers.then((response) => response);
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
      .put(urlCustomer, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <h1 className="my-5">CUSTOMER FORM</h1>
      <div className="w-50 m-auto mt-5">
        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-floating col-6">
            <input
              className="form-control"
              placeholder="Name"
              type="Name"
              {...register("name", {
                required: true,
              })}
            />
            <label className="mx-2 form-label">Name</label>
            {errors.Name && <p>This field is required</p>}
          </div>
          <div className="form-floating col-6">
            <input
              className="form-control"
              placeholder="Email"
              {...register("mail", {
                required: true,
                pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
              })}
            />
            {/* {errors.mail && <p>This field is required</p>} */}
            <p>{errors.mail ? "Please input valid email type" : ""}</p>
            <label className="mx-2 form-label">Email</label>
          </div>
          <div className="form-floating col-12">
            <input
              className="form-control"
              placeholder="Address 1"
              {...register("address1", { required: true })}
            />
            {errors.address1 && <p>This field is required</p>}
            <label className="mx-2 form-label">Address 1</label>
          </div>
          <div className="form-floating col-12">
            <input
              className="form-control"
              placeholder="Address 2"
              {...register("address2", { required: false })}
            />
            {errors.address2 && <p>This field is required</p>}
            <label className="mx-2 form-label">Address 2</label>
          </div>

          <div className="col-md-6">
            <label className="form-label">City</label>
            <input
              {...register("city", { required: false })}
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Phone</label>
            <input
              type="text"
              {...register("phone", { required: false })}
              className="form-control"
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Post Code</label>
            <input
              {...register("postcode", { required: false })}
              type="text"
              className="form-control"
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
