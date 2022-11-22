import React from "react";
import MainContainer from "../components/MainContainer";
import styles from "../styles/Home.module.css";
import RegForm from "../components/RegForm";
import { useRouter } from "next/router";
import { en, ru } from "../translations";

const registration = (props) => {

  const router = useRouter();

  const { locale } = router;

  let t;

  switch(locale){
    case "ru":
      t = ru;
      break;
    case "en":
      t = en;
      break;
  }

  return (
    <MainContainer title="registration">
      <main className={styles.main}>
        <div className={styles.text}>{t.registration}</div>
        <RegForm buttonName="Registration" />
      </main>
    </MainContainer>
  );
};

export default registration;
