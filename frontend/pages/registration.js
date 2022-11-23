<<<<<<< HEAD
import MainContainerConnect from "../components/MainContainerConnect";
import { Provider } from "react-redux";
import MainRegistration from "../components/MainRegistration";
import store from "../components/redux/redux-store.js";
=======
import React from "react";
import MainContainer from "../components/MainContainer";
import styles from "../styles/Home.module.css";
import RegForm from "../components/RegForm";
import { useRouter } from "next/router";
import { en, ru } from "../translations";
>>>>>>> a1e1d319776188a0fca7698e061ecb825069bd1f

const registration = (props) => {

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
<<<<<<< HEAD
    <Provider store={store}>
      <MainContainerConnect title="Registration">
        <MainRegistration />
      </MainContainerConnect>
    </Provider>
=======
    <MainContainer title="registration">
      <main className={styles.main}>
        <div className={styles.text}>{t.registration}</div>
        <RegForm buttonName="Registration" />
      </main>
    </MainContainer>
>>>>>>> a1e1d319776188a0fca7698e061ecb825069bd1f
  );
};

export default registration;
