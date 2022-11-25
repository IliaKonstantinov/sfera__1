import styles from "../styles/Home.module.css";
import Main from "../components/MainContainer/MainLogin/Main";
import { Provider } from "react-redux";
import store from "../components/redux/redux-store.js";
import MainContainer from "../components/MainContainer/MainContainer";

export default function Home() {
  return (
    <Provider store={store}>
      <MainContainer
        title={"Login"}
        className={styles.container}
        description={"Login page with google authorization"}
        keywords={"Authorization, Google, Login, Signin"}
      >
        <Main />
      </MainContainer>
    </Provider>
  );
}
