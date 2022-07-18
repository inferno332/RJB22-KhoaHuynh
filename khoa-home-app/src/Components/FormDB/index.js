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
      let response = await axios("https://provinces.open-api.vn/api/");
      let tempCities = await response.data;
      console.log(response);
      setCities(tempCities);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  const citiesWatch = watch("city");
  const districtsWatch = watch("district");
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="form-wrapper m-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-6 flex-column">
              <label>Email</label>
              <input
                placeholder="Email"
                {...register("mail", {
                  required: true,
                  pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                })}
              />
              {errors.mail && <p>This field is required</p>}
            </div>
            <div className="col-6 flex-column">
              <label>Password</label>
              <input
                {...register("password", {
                  required: true,
                })}
              />
              {errors.password && <p>This field is required</p>}
            </div>
          </div>

          <div className="d-flex flex-column">
            <label>Address 1</label>
            <input
              placeholder="Address 1"
              {...register("address1", { required: true })}
            />
            {errors.address1 && <p>This field is required</p>}
          </div>

          <div className="d-flex flex-column">
            <label>Address 2</label>
            <input
              placeholder="Address 2"
              {...register("address2", { required: true })}
            />
            {errors.address2 && <p>This field is required</p>}
          </div>

          <div className="row">
            <div className="d-flex flex-column">
              <label>Tỉnh thành</label>
              <select
                defaultValue="2"
                {...register("city", { required: true })}
              >
                {cities.map(({ name }, index) => {
                  return (
                    <option key={index} value={name}>
                      {name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="d-flex flex-column">
              <label>Tỉnh thành</label>
              <select
                defaultValue="2"
                {...register("city", { required: true })}
              >
                {cities.map(({ name }, index) => {
                  return (
                    <option key={index} value={name}>
                      {name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}
