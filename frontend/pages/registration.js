import React from "react";
import MainContainer from "../components/MainContainer";
import styles from "../styles/Home.module.css";
import RegForm from "../components/RegForm";

const registration = (props) => {
  return (
    <MainContainer title="registration">
      <main className={styles.main}>
        <div className={styles.text}>Registration</div>
        <RegForm buttonName="Registration" />
      </main>
    </MainContainer>  
  );
};

export default registration;
