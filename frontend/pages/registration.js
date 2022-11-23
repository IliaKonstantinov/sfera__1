import React from "react";
import MainContainerConnect from "../components/MainContainerConnect";
import styles from "../styles/Home.module.css";
import { Provider } from "react-redux";
import MainRegistration from "../components/MainRegistration";
import store from "../components/redux/redux-store.js";

const registration = (props) => {
  return (
    <Provider store={store}>
      <MainContainerConnect title="registration">
        <MainRegistration />
      </MainContainerConnect>
    </Provider>
  );
};

export default registration;
