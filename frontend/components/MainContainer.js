import Head from "next/head";
import A from "./A";
import styles from "../styles/MainContainer.module.css";

const MainContainer = (props) => {

  const onChangeStyles = () => {
    if (!props.toggleChangeStyle) {
      props.changeStyle1();
    } else {
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
      <div
        className={!props.toggleChangeStyle ? styles.nav : styles.nav_style1}
      >
        <A href="/" text={"Login"}></A>
        <A href="/registration" text={"Registration"}></A>
        <button onClick={onChangeStyles}>Change style</button>
      </div>
      <div>{props.children}</div>
    </>
  );
};

export default MainContainer;
