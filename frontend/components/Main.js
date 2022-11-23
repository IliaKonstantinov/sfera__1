import styles from "../styles/Main.module.css";
import Login from "./Login";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { connect, useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/main-reducer";

const Main = (props) => {
  console.log(props);
  const [isToken, setIsToken] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(state => state.mainPage.user)
  console.log(user);

  function handleCallbackResponse(response) {
    console.log("Eccoded JWT ID token: " + response.credential);
    setIsToken(window.localStorage.setItem("token", response.credential));
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
    dispatch({type: "SET_USER", payload: userObject})
  }

  const signOut = () => {
    setIsToken(window.localStorage.setItem("token", ""));
    dispatch({type: "SET_USER", payload: null})
  };


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
    setIsToken(window.localStorage.getItem("token"));
    if(window.localStorage.getItem("token").length){
      const userData = jwt_decode(window.localStorage.getItem("token"));
      dispatch({type: "SET_USER", payload: userData})
    }
  }, [isToken]); 

  return (
    <main
      className={!props.toggleChangeStyle ? styles.main_style1 : styles.main}
    >
      {user !== null ? (
        <div>
          <img scr={user.pictures} />
          <h3>{user.name}</h3>
          <button onClick={signOut}>Sign out</button>
        </div>
      ) : (
        <div>
          <div className={styles.text}>Login</div>
          <Login />
          <div id="singInDiv"></div>
        </div>
      )}
    </main>
  );
};

let mapStateToProps = (state) => ({
  style: state.mainPage.style,
  toggleChangeStyle: state.mainPage.toggleChangeStyle,
});

export default connect(mapStateToProps, {})(Main);
