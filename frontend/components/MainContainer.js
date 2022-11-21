import Head from "next/head";
import A from "./A";
import style from "../styles/MainContainer.module.css";

const MainContainer = ({ children, title }) => {
   
  return (
    <>
      <Head> 
        <title>{title}</title>
        <meta name="description" content="auth-project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.nav}>
        <A href="/" text={"Login"}></A>
        <A href="/registration" text={"Registration"}></A>
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
