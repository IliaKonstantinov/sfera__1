import styles from "../styles/Home.module.css";
import Main from "../components/MainContainer/MainLogin/Main";
import MainContainerConnect from "../components/MainContainer/MainContainerConnect";
import { Provider } from "react-redux";
import store from "../components/redux/redux-store.js";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (window.localStorage.getItem("token") === undefined) {
      window.localStorage.setItem("token", "");
    }
  }, []);
  return (
    <Provider store={store}>
      <MainContainerConnect
        title={"Login"}
        className={styles.container}
        description={"Login page with google authorization"}
        keywords={"Authorization, Google, Login, Signin"}
      >
        <Main />
      </MainContainerConnect>
    </Provider>
  );
}
