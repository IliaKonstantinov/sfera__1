import Head from "next/head";
import A from "./A";
import style from "../styles/MainContainer.module.css";
import { ru, en} from "../translations";
import { useRouter } from "next/router";

const MainContainer = ({ children, title }) => {

  const router = useRouter();

  const { locale } = router;

  let t;

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
        <title>{title}</title>
        <meta name="description" content="auth-project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.nav}>
        <A href="/" text={t.login}></A>
        <A href="/registration" text={t.registration}></A>
        <div>
          <button className={style.locale} onClick={() => handleChangeLang("ru")}>Русский</button>
          <button className={style.locale} onClick={() => handleChangeLang("en")}>English</button>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
