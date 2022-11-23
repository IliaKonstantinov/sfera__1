import styles from "../styles/Main.module.css";
import { connect } from "react-redux";
import RegForm from "./RegForm";

const MainRegistration = (props) => {
  console.log(props);

  return (
    <main
      className={!props.toggleChangeStyle ? styles.main_style1 : styles.main}
    >
      <div>
        <div className={styles.text}>Registration</div>
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
