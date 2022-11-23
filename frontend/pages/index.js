import styles from "../styles/Home.module.css";
import Main from "../components/Main";
import MainContainerConnect from "../components/MainContainerConnect";
import { Provider } from "react-redux";
import store from "../components/redux/redux-store.js";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   if (!window.localStorage.getItem("token")) {
  //     window.localStorage.setItem("token", null);
  //   }
  // }, []);
  return (
    <Provider store={store}>
      <MainContainerConnect title="Login" className={styles.container}>
        <Main />
        <footer className={styles.footer}></footer>
      </MainContainerConnect>
    </Provider>
  );
}
