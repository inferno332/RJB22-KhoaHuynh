import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CustomerForm() {
  let { id } = useParams();
  const [cities, setCities] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  // fetch City Data
  async function fetchDataCities() {
    try {
      let response = await axios("https://provinces.open-api.vn/api/?depth=3");
      let tempCities = await response.data;
      setCities(tempCities);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }
  // fetch Customers Form from List
  async function fetchDataCustomerList(urlCustomer) {
    try {
      let response = await axios.get(urlCustomer);
      let tempCustomers = await response.data;
      console.log(id);
      if (id) {
        setValue("name", tempCustomers?.name);
        setValue("mail", tempCustomers?.email);
        setValue("address1", tempCustomers?.address);
      }
      return tempCustomers;
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  const citiesWatch = watch("city");
  const districtsWatch = watch("district");
  let urlCustomer =
    "https://62d16f46d4eb6c69e7dd5d81.mockapi.io/customers/" + id;
  let url = "https://62d16f46d4eb6c69e7dd5d81.mockapi.io/customers/";

  useEffect(() => {
    if (id) {
      let tempCustomers = fetchDataCustomerList(urlCustomer);
      tempCustomers.then((response) => response);
    }
    fetchDataCities();
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
    let createData = {
      name: data?.name,
      postCode: "55000",
      address: data?.address1,
      dob: "05/03/1997",
      email: data?.mail,
      gender: "male",
      phone: "1-832-736-9208 x651",
    };
    axios
      .post(url, createData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const putData = (data) => {
    let updateData = {
      name: data?.name,
      postCode: "55000",
      address: data?.address1,
      dob: "05/03/1997",
      email: data?.mail,
      gender: "male",
      phone: "1-832-736-9208 x651",
    };
    axios
      .put(urlCustomer, updateData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <h1 className="text-muted my-5">CUSTOMER FORM</h1>
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

          {/* Chọn tỉnh */}
          <div className="col-4">
            <label className="form-label">Tỉnh thành</label>
            <select
              className="form-control"
              defaultValue=""
              {...register("city", { required: false })}
            >
              <option value="">Choose...</option>
              {cities.map((city) => {
                return <option key={city.code}>{city.name}</option>;
              })}
            </select>
          </div>
          {/* Chọn quận */}
          <div className="col-4">
            <label className="form-label">Quận</label>
            <select
              className="form-control"
              defaultValue=""
              {...register("district", { required: false })}
            >
              <option value="">Choose</option>
              {cities.map((city) => {
                return city.name === citiesWatch
                  ? city.districts.map((district) => {
                      return (
                        <option key={district.code}>{district.name}</option>
                      );
                    })
                  : null;
              })}
            </select>
          </div>
          {/* Chọn huyện */}
          <div className="col-4">
            <label className="form-label">Huyện</label>
            <select
              className="form-control"
              defaultValue=""
              {...register("ward", { required: false })}
            >
              <option value="">Choose</option>
              {cities.map((city) => {
                return city.name === citiesWatch
                  ? city.districts.map((district) => {
                      return district.name === districtsWatch
                        ? district.wards.map((ward) => {
                            return <option key={ward.code}>{ward.name}</option>;
                          })
                        : null;
                    })
                  : null;
              })}
            </select>
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
