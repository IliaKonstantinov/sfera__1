import React from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/Home.module.css";
import { LoginAPI } from "../pages/api/api";
import { useRouter } from "next/router";
import { en, ru } from "../translations";

export default function RegForm(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    console.log("OnSubmit data", e);
    LoginAPI.Registration(e).then((data) => {
      console.log("Response data", data);
      window.localStorage.setItem("token", data.access_token);
    });
  };

  
  const router = useRouter();

  const { locale } = router;

  let t = en;

  switch(locale){
    case "ru":
      t = ru;
      break;
    case "en":
      t = en;
      break;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <input placeholder={t.email} {...register("email", { required: true })} />
        {errors.email && errors.email.type == "required" && (
          <p className={styles.error}>{t.enterEmail}</p>
        )}
      </div>
      <div>
        <input
          placeholder={t.password}
          {...register("password", { required: true })}
        />
        {errors.password && errors.password.type == "required" && (
          <p className={styles.error}>{t.enterPassword}</p>
        )}
      </div>
      <div>
        <input type="submit" value={t.submit} />
      </div>
    </form>
  );
}
