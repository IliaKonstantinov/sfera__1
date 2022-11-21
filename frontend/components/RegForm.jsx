import React from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/Home.module.css";
import { LoginAPI } from "../pages/api/api";

const RegForm = (props) => {
   
  const { 
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm();

  const myfun = (e) => {
    LoginAPI.Registration({ email: e.login, password: e.password }).then(
      (data) => {
        window.localStorage.setItem("token", data.access_token);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(myfun)} className={styles.form}>
      <div>
        <input placeholder="Login" {...register("login", { required: true })} />
        {errors.login && errors.login.type == "required" && (
          <p className={styles.error}>Please enter you Login</p>
        )}
      </div>
      <div>
        <input
          placeholder="Password"
          {...register("password", { required: true, minLength: 5 })}
        />
        {errors.password && errors.password.type == "required" && (
          <p className={styles.error}>Please enter you Password</p>
        )}
      </div>
      <div>
        <input type="checkbox" /> remember me
      </div>
      <div>
        <button onClick={myfun}>{props.buttonName}</button>
      </div>
    </form>
  );
};

export default RegForm;
