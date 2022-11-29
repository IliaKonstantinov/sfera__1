import styles from "../../../styles/Main.module.scss";
import RegForm from "./RegForm/RegForm";
import { useRouter } from "next/router";
import { cs, en, ru } from "../../../translations";
import { useSelector } from "react-redux";

const MainRegistration = () => {
  const toggleChangeStyle = useSelector(
    (state) => state.mainPage.toggleChangeStyle
  );

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
      className={!toggleChangeStyle ? styles.main_style1 : styles.main}
      data-testid="registration"
    >
      <div className={styles.form_wrapper}>
        <div className={styles.text}>{t.registration}</div>
        <RegForm />
        <div id="singInDiv"></div>
      </div>
    </main>
  );
};

export default MainRegistration;
