import React from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/Home.module.css";
import { LoginAPI } from "../pages/api/api";

const Login = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const myfun = (e) => {
    LoginAPI.PostLogin({ email: e.login, password: e.password }).then(
      (data) => {
        console.log("DATA LOGIN", data);
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
        {errors.login && errors.login.type == "required" && (
          <p className={styles.error}>Incorrect Login</p>
        )}
      </div>
      <div>
        <input
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && errors.password.type == "required" && (
          <p className={styles.error}>Please enter you Password</p>
        )}
      </div>
      <div>
        <input type="checkbox" /> remember me
      </div>
      <div>
        <button onClick={myfun}>Login</button>
      </div>
    </form>
  );
};

export default Login;
