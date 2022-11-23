import { useForm } from "react-hook-form";
import styles from "../../../../styles/Login.module.css";
import { LoginAPI } from "../../../../pages/api/api";
import { useRouter } from "next/router";
import { cs, en, ru } from "../../../../translations";

const Login = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    LoginAPI.PostLogin(e).then((data) => {
      console.log("DATA LOGIN", data);
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

export default Login;
