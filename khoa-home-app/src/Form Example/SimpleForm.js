import React from "react";
import { useForm } from "react-hook-form";

export default function SimpleForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <div className="d-flex m-5 justify-content-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          {errors.firstName && <span>This field is required</span>}
          <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
          <input type="number" {...register("age", { min: 18, max: 99 })} />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
