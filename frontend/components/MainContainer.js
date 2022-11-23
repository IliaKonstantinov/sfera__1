import Head from "next/head";
import A from "./A";
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
        <A
          
          href="/"
          text={t.login}
        ></A>
        <A
          
          href="/registration"
          text={t.registration}
        ></A>
        <button onClick={onChangeStyles}>{t.style}</button>
        <div className={!props.toggleChangeStyle ? styles.locales : ''}>
          <button className={!props.toggleChangeStyle ? styles.locale1 : styles.locale} onClick={() => handleChangeLang("ru")}>Русский</button>
          <button className={!props.toggleChangeStyle ? styles.locale1 : styles.locale} onClick={() => handleChangeLang("en")}>English</button>
        </div>
      </div>
      <div>{props.children}</div>
    </>
  );
};

export default MainContainer;
