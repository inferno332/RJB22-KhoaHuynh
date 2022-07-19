import React, { useState, useEffect } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function FormDB() {
  const [cities, setCities] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function fetchData() {
    try {
      let response = await axios("https://provinces.open-api.vn/api/?depth=3");
      let tempCities = await response.data;
      console.log(response);
      setCities(tempCities);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  const citiesWatch = watch("city");
  const districtsWatch = watch("district");
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-50 m-auto">
        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-6">
            <label className="form-label">Email</label>
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
          </div>
          <div className="col-6">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && <p>This field is required</p>}
          </div>
          <div className="col-12">
            <label className="form-label">Address 1</label>
            <input
              className="form-control"
              placeholder="Address 1"
              {...register("address1", { required: true })}
            />
            {errors.address1 && <p>This field is required</p>}
          </div>
          <div className="col-12">
            <label className="form-label">Address 2</label>
            <input
              className="form-control"
              placeholder="Address 2"
              {...register("address2", { required: false })}
            />
            {errors.address2 && <p>This field is required</p>}
          </div>

          {/* Chọn tỉnh */}
          <div className="col-4">
            <label className="form-label">Tỉnh thành</label>
            <select
              className="form-control"
              defaultValue=""
              {...register("city", { required: true })}
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
              {...register("district", { required: true })}
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
              {...register("ward", { required: true })}
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
