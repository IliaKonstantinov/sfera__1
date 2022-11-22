import styles from "../styles/Home.module.css";
import Main from "../components/Main";
import MainContainerConnect from "../components/MainContainerConnect";
import { Provider } from "react-redux";
import store from "../components/redux/redux-store.js";

export default function Home() {
  return (
    <Provider store={store}>
      <MainContainerConnect title="Login" className={styles.container}>
        <Main />
        <footer className={styles.footer}></footer>
      </MainContainerConnect>
    </Provider>
  );
}
