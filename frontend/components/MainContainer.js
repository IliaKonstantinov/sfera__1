import Head from "next/head";
import A from "./A";
<<<<<<< HEAD
import styles from "../styles/MainContainer.module.css";

const MainContainer = (props) => {
  const onChangeStyles = () => {
    if (!props.toggleChangeStyle) {
      props.changeStyle1();
    } else {
      props.changeStyle2();
    }
  };


=======
import style from "../styles/MainContainer.module.css";
import { ru, en} from "../translations";
import { useRouter } from "next/router";

const MainContainer = ({ children, title }) => {

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

  const handleChangeLang = (lang) => {
    router.push("/", "/", {locale: lang})
  }
>>>>>>> a1e1d319776188a0fca7698e061ecb825069bd1f
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="auth-project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<<<<<<< HEAD
      <div
        className={!props.toggleChangeStyle ? styles.nav : styles.nav_style1}
      >
        <A
          
          href="/"
          text={"Login"}
        ></A>
        <A
          
          href="/registration"
          text={"Registration"}
        ></A>
        <button onClick={onChangeStyles}>Change style</button>
=======
      <div className={style.nav}>
        <A href="/" text={t.login}></A>
        <A href="/registration" text={t.registration}></A>
        <div>
          <button className={style.locale} onClick={() => handleChangeLang("ru")}>Русский</button>
          <button className={style.locale} onClick={() => handleChangeLang("en")}>English</button>
        </div>
>>>>>>> a1e1d319776188a0fca7698e061ecb825069bd1f
      </div>
      <div>{props.children}</div>
    </>
  );
};

export default MainContainer;
