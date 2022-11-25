import { useForm } from "react-hook-form";
import styles from "../../../../styles/RegForm.module.scss";
import { LoginAPI } from "../../../../pages/api/api";
import { useRouter } from "next/router";
import { cs, en, ru } from "../../../../translations";
import { connect, useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

function RegForm(props) {
  let emailRef = useRef();
  let passwordRef = useRef();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    console.log("OnSubmit data", e);
    LoginAPI.Registration(e).then((data) => {
      console.log("Response data", data);
      window.localStorage.setItem("token", data.access_token);
      reset({
        email:"",
        password:""
      })
      alert('Успешная регистрация!')
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
          ref={emailRef}
          placeholder={t.email}
          className={styles.input_text}
          {...register("email", { 
              required: true, pattern: {
                value: /@/,
                message: t.mailError
            }, minLength: {
              value: 4, message: t.minLength
            }
          })}
        />
        {errors.email && errors.email.type == "required" && (
          <p className={styles.error}>{t.enterEmail}</p>
        )}
        {errors.email && errors.email?.message && (
          <p className={styles.error}>{errors.email.message}</p>
        )}
      </div>
      <div>
        <input
          ref={passwordRef}
          placeholder={t.password}
          className={styles.input_text}
          {...register("password", { required: true, minLength: {
            value: 4,
            message: t.minLength
          } })}
          type="password"
        />
        {errors.password && errors.password.type == "required" && (
          <p className={styles.error}>{t.enterPassword}</p>
        )}
        {errors.password && errors.password?.message && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
      </div>
      <div>
        <input type="submit" value={t.submit} className={
            !props.toggleChangeStyle
              ? styles.input_submit_style1
              : styles.input_submit
          } />
      </div>
    </form>
  );
}


let mapStateToProps = (state) => ({
  toggleChangeStyle: state.mainPage.toggleChangeStyle,
});

export default connect(mapStateToProps, {})(RegForm);