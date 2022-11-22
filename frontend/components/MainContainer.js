import Head from "next/head";
import A from "./A";
import styles from "../styles/MainContainer.module.css";
import { useState } from "react";

const MainContainer = (props) => {
  const [style, setStyle] = useState(styles.nav);

  const onChangeStyles = () => {
    if (!props.toggleChangeStyle) {
      setStyle(styles.nav_style1);
      props.changeStyle1();
    } else {
      setStyle(styles.nav);
      props.changeStyle2();
    }
  };

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="auth-project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style}>
        <A href="/" text={"Login"}></A>
        <A href="/registration" text={"Registration"}></A>
        <button onClick={onChangeStyles}>Change style</button>
      </div>
      <div>{props.children}</div>
    </>
  );
};

export default MainContainer;
