import styles from "../../../styles/Main.module.css";
import { connect } from "react-redux";
import RegForm from "./RegForm/RegForm";
import { useRouter } from "next/router";
import { cs, en, ru } from "../../../translations";

const MainRegistration = (props) => {
  //console.log(props);

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

  return (
    <main
      className={!props.toggleChangeStyle ? styles.main_style1 : styles.main}
    >
      <div className={styles.form_wrapper}>
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
