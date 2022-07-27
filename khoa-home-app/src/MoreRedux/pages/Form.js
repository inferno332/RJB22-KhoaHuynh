import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const textAddress = ["43 Domenic Horse", "92 Run Bear", "75 Chauncey Lion"];
export default function Form() {
  const [inputBranch, setInputBranch] = useState("");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const handleGenAddress = () => {
    if (inputBranch === "001") {
      setValue("address", textAddress[0]);
    } else if (inputBranch === "002") {
      setValue("address", textAddress[1]);
    } else setValue("address", textAddress[2]);
  };
  // Create user onsubmit
  const createUsers = (data) => {
    return axios
      .post("https://62d16f46d4eb6c69e7dd5d81.mockapi.io/suppliers/", data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  const onSubmit = (data, e) => {
    e.preventDefault();
    data ? console.log('co data') : console.log('k co data');
  };
  return (
    <div>
      <h1>LẬP TRÌNH WEB VỚI REACT, NODEJS, MONGODB, EXPRESSJS</h1>
      <div className="w-50 m-auto mt-5">
        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-12">
            <label
              className="form-label"
              placeholder="Name"
              {...register("name", { required: true })}
            >
              NAME
            </label>
            <input className="form-control"></input>
          </div>

          <div className="col-12">
            <label className="form-label">Branch</label>
            <div className="d-flex">
              <input
                maxLength={5}
                className="form-control"
                {...register("branch", {
                  required: true,
                  maxLength: 5,
                  pattern: /^[0-9]*$/,
                })}
                defaultValue={inputBranch}
                onChange={(e) => setInputBranch(e.target.value)}
              ></input>
              {errors.branch && <p>Wrong input</p>}
              <button
                disabled={!inputBranch}
                className="btn btn-info"
                onClick={handleGenAddress}
              >
                Gen Address
              </button>
            </div>
          </div>
          <div className="col-12">
            <input
              className="form-control"
              placeholder="Please gen address"
              readOnly
              {...register("address", { required: false })}
            ></input>
          </div>
          {/* Submit */}
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
