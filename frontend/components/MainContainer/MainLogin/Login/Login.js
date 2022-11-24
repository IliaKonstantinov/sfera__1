import { useForm } from "react-hook-form";
import styles from "../../../../styles/Login.module.css";
import { LoginAPI } from "../../../../pages/api/api";
import { useRouter } from "next/router";
import { cs, en, ru } from "../../../../translations";
import jwt_decode from "jwt-decode";
import { connect, useDispatch, useSelector } from "react-redux";

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
    LoginAPI.PostLogin(e).then((data) => {
      console.log("DATA LOGIN", data);
      localStorage.setItem("token", data.access_token);
      let userObjectLogin = jwt_decode(data.access_token);
      console.log(userObjectLogin);
      dispatch({ type: "SET_USER", payload: userObjectLogin });
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
          {...register("email", { required: true })}
        />
        {errors.email && errors.email.type == "required" && (
          <p className={styles.error}>{t.enterEmail}</p>
        )}
      </div>
      <div>
        <input
          placeholder={t.password}
          className={styles.input_text}
          {...register("password", { required: true })}
        />
        {errors.password && errors.password.type == "required" && (
          <p className={styles.error}>{t.enterPassword}</p>
        )}
      </div>
      <div>
        <input type="submit" value={t.login} className={styles.input_submit} />
      </div>
    </form>
  );
};

let mapStateToProps = (state) => ({
  //toggleChangeStyle: state.mainPage.toggleChangeStyle,
});

export default connect(mapStateToProps, {})(Login);
