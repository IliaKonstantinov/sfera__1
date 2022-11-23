import styles from "../styles/Home.module.css";
<<<<<<< HEAD
import Main from "../components/Main";
import MainContainerConnect from "../components/MainContainerConnect";
import { Provider } from "react-redux";
import store from "../components/redux/redux-store.js";
import { useEffect } from "react";
=======
import Login from "../components/Login";
import MainContainer from "../components/MainContainer";
import { useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import { en, ru } from "../translations";

export default function Home() { 
  const [user, setUser] = useState(false);
  console.log(user);
  function handleCallbackResponse(response) {
    console.log("Eccoded JWT ID token: " + response.credential);
    window.localStorage.setItem("token", response.credential);
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
  }

  
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

  useEffect(() => {
    /* glogal google*/
    window.google.accounts.id.initialize({
      client_id:
        "477480946204-rpt4a6fum1v8jh8banbdrtonp1g5ioa0.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("singInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);
>>>>>>> a1e1d319776188a0fca7698e061ecb825069bd1f

export default function Home() {
  useEffect(() => {
    if (window.localStorage.getItem("token") === undefined) {
      window.localStorage.setItem("token", "");
    }
  }, []);
  return (
<<<<<<< HEAD
    <Provider store={store}>
      <MainContainerConnect title="Login" className={styles.container}>
        <Main />
        <footer className={styles.footer}></footer>
      </MainContainerConnect>
    </Provider>
=======
    <MainContainer data-testid="main" title="Login" className={styles.container}>
      <main className={styles.main}>
        {user ? (
          <div>
            <img scr={user.pictures} />
            <h3>{user.name}</h3>
          </div>
        ) : (
          <div>
            <div className={styles.text}>{t.login}</div>
            <Login />
            <div id="singInDiv"></div>
          </div>
        )}
      </main>
      <footer className={styles.footer}></footer>
    </MainContainer>
>>>>>>> a1e1d319776188a0fca7698e061ecb825069bd1f
  );
}
