import { useForm } from "react-hook-form";
import styles from "../styles/Home.module.css";
import { LoginAPI } from "../pages/api/api";

const Login = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    console.log(e);
    LoginAPI.PostLogin(e).then((data) => {
      console.log("DATA LOGIN", data);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <input placeholder="email" {...register("email", { required: true })} />
        {errors.email && errors.email.type == "required" && (
          <p className={styles.error}>Please enter you email</p>
        )}
      </div>
      <div>
        <input
          placeholder="password"
          {...register("password", { required: true })}
        />
        {errors.password && errors.password.type == "required" && (
          <p className={styles.error}>Please enter you Password</p>
        )}
      </div>
      <div>
        <input type="submit" value="Login" />
      </div>
    </form>
  );
};

export default Login;
