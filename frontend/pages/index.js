import styles from "../styles/Home.module.css";
import Login from "../components/Login";
import MainContainer from "../components/MainContainer";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

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

  useEffect(() => {
    /* glogal google*/
    google.accounts.id.initialize({
      client_id:
        "477480946204-rpt4a6fum1v8jh8banbdrtonp1g5ioa0.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("singInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <MainContainer title="Login" className={styles.container}>
      <main className={styles.main}>
        {user ? (
          <div>
            <img scr={user.pictures} />
            <h3>{user.name}</h3>
          </div>
        ) : (
          <div>
            <div className={styles.text}>Login</div>
            <Login />
            <div id="singInDiv"></div>
          </div>
        )}
      </main>
      <footer className={styles.footer}></footer>
    </MainContainer>
  );
}
