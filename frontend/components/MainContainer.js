import Head from "next/head";
import A from "./A";
<<<<<<< HEAD
import styles from "../styles/MainContainer.module.css";
import { useRouter } from "next/router";
import { en, ru } from "../translations";

const MainContainer = (props) => {
  const onChangeStyles = () => {
    if (!props.toggleChangeStyle) {
      props.changeStyle1();
    } else {
      props.changeStyle2();
    }
  };

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
          text={t.login}
        ></A>
        <A
          
          href="/registration"
          text={t.registration}
        ></A>
        <button onClick={onChangeStyles}>Change style</button>
<<<<<<< HEAD
        <div className={!props.toggleChangeStyle ? styles.locales : ''}>
          <button className={!props.toggleChangeStyle ? styles.locale1 : styles.locale} onClick={() => handleChangeLang("ru")}>Русский</button>
          <button className={!props.toggleChangeStyle ? styles.locale1 : styles.locale} onClick={() => handleChangeLang("en")}>English</button>
        </div>
=======
=======
      <div className={style.nav}>
        <A href="/" text={t.login}></A>
        <A href="/registration" text={t.registration}></A>
        <div>
          <button className={style.locale} onClick={() => handleChangeLang("ru")}>Русский</button>
          <button className={style.locale} onClick={() => handleChangeLang("en")}>English</button>
        </div>
>>>>>>> a1e1d319776188a0fca7698e061ecb825069bd1f
>>>>>>> 0f660e1fc827f10859f0e68c9dd6ffb533752176
      </div>
      <div>{props.children}</div>
    </>
  );
};

export default MainContainer;
