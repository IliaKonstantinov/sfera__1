import styles from "../../../styles/Main.module.scss";
import Login from "./Login/Login";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { cs, en, ru } from "../../../translations";
import { setUser } from "../../redux/main-reducer";

const Main = () => {
  const [isToken, setIsToken] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.mainPage.user);
  const style = useSelector((state) => state.mainPage.style);
  const toggleChangeStyle = useSelector(
    (state) => state.mainPage.toggleChangeStyle
  );

  function handleCallbackResponse(response) {
    setIsToken(window.localStorage.setItem("token", response.credential));
    let userObject = jwt_decode(response.credential);
    dispatch(setUser(userObject));
  }

  const signOut = () => {
    setIsToken(window.localStorage.setItem("token", null));
    dispatch(setUser(null));
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

  useEffect(() => {
    /* glogal google*/
    try {
      google.accounts.id.initialize({
        client_id:
          "477480946204-rpt4a6fum1v8jh8banbdrtonp1g5ioa0.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });
      google.accounts.id.renderButton(document.getElementById("singInDiv"), {
        theme: "outline",
        size: "large",
      });
      setIsToken(window.localStorage.getItem("token"));
      if (
        window.localStorage.getItem("token") !== "null" &&
        window.localStorage.getItem("token") !== null
      ) {
        const userData = jwt_decode(window.localStorage.getItem("token"));
        dispatch(setUser(userData));
      }
    } catch (err) {
      //console.error(err);
    }
  }, [isToken]);

  return (
    <main className={!toggleChangeStyle ? styles.main_style1 : styles.main}>
      {user !== null ? (
        <div>
          <img scr={user.pictures} />
          <h3 className={styles.profile_disc}>
            <p className={styles.profile_name}>{user.name}</p>
            <p className={styles.profile_email}>{user.email}</p>
          </h3>
          <button
            onClick={signOut}
            className={
              !toggleChangeStyle
                ? styles.profile_signout_style1
                : styles.profile_signout
            }
          >
            {t.signOut}
          </button>
        </div>
      ) : (
        <div className={styles.form_wrapper}>
          <div className={styles.text}>{t.login}</div>
          <Login />
          <div id="singInDiv" className={styles.google}></div>
        </div>
      )}
    </main>
  );
};

export default Main;
