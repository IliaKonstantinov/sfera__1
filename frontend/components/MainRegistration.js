import styles from "../styles/Main.module.css";
import { connect } from "react-redux";
import RegForm from "./RegForm";
import { useRouter } from "next/router";
import { en, ru } from "../translations";

const MainRegistration = (props) => {
  console.log(props);

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
    <main
      className={!props.toggleChangeStyle ? styles.main_style1 : styles.main}
    >
      <div>
        <div className={styles.text}>{t.registration}</div>
        <RegForm />
        <div id="singInDiv"></div>
      </div>
    </main>
  );
};

let mapStateToProps = (state) => ({
  style: state.mainPage.style,
  toggleChangeStyle: state.mainPage.toggleChangeStyle,
});

export default connect(mapStateToProps, {})(MainRegistration);
