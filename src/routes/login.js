import PageHeader from '../components/PageHeader/PageHeader';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
    return (
      <main className="main-container w-full h-full">
        <PageHeader url="/login" link="Login" name="Login" description="This is an example dashboard created using build-in elements and components." />
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register("example")} />
            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("exampleRequired", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" />
          </form>
      </main>
    );
  }