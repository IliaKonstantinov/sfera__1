import { useForm } from "react-hook-form";
import styles from "../../../../styles/Login.module.scss";
import { LoginAPI } from "../../../../pages/api/api";
import { useRouter } from "next/router";
import { cs, en, ru } from "../../../../translations";
import jwt_decode from "jwt-decode";
import { connect, useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.mainPage.user);

  const onSubmit = (e) => {
    LoginAPI.PostLogin(e)
      .then((data) => {
        console.log("DATA LOGIN", data);
        localStorage.setItem("token", data.access_token);
        let userObjectLogin = jwt_decode(data.access_token);
        console.log(userObjectLogin);
        dispatch({ type: "SET_USER", payload: userObjectLogin });
      })
      .catch((err) => {
        switch (err.response.data.status){
          case 402:
            toast.error(t.err402);
            break;
          default:
            toast.error(err.response.data.message);
        }
      });
  };

  const router = useRouter();

  const { locale } = router;

  let t = en;

  switch (locale) {
    case "ru":
      t = ru;
      break;
    case "en":
      t = en;
      break;
    case "cs":
      t = cs;
      break;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.input}>
        <input
          placeholder={t.email}
          className={styles.input_text}
          data-testid="email"
          {...register("email", {
            required: true,
            pattern: {
              value: /@/,
              message: t.mailError,
            },
            minLength: {
              value: 4,
              message: t.minLength,
            },
          })}
        />
        {errors.email && errors.email.type == "required" && (
          <p data-testid="errorEmpty" className={styles.error}>{t.enterEmail}</p>
        )}
        {errors.email && errors.email?.message && (
          <p data-testid="error" className={styles.error}>{errors.email.message}</p>
        )}
      </div>
      <div>
        <input
          placeholder={t.password}
          className={styles.input_text}
          data-testid="password"
          {...register("password", {
            required: true,
            minLength: {
              value: 4,
              message: t.minLength,
            },
          })}
          type="password"
        />
        {errors.password && errors.password.type == "required" && (
          <p data-testid="errorEmpty" className={styles.error}>{t.enterPassword}</p>
        )}
        {errors.password && errors.password?.message && (
          <p data-testid="error" className={styles.error}>{errors.password.message}</p>
        )}
      </div>
      <div>
        <input
          type="submit"
          data-testid="submit"
          value={t.login}
          className={
            !props.toggleChangeStyle
              ? styles.input_submit_style1
              : styles.input_submit
          }
        />
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </form>
  );
};

let mapStateToProps = (state) => ({
  toggleChangeStyle: state.mainPage.toggleChangeStyle,
});

export default connect(mapStateToProps, {})(Login);
