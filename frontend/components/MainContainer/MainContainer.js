import Head from "next/head";
import A from "../A";
import styles from "../../styles/MainContainer.module.scss";
import { useRouter } from "next/router";
import { en, ru, cs } from "../../translations";

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

  switch (locale) {
    case "ru":
      t = ru;
      break;
    case "en":
      t = en;
      break;
    case "cs":
      t = cs;
      break;
  }

  const handleChangeLang = (lang) => {
    router.push("/", "/", { locale: lang });
  };

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={`Auth-project` + props.description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={props.keywords || "Authorization"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        className={!props.toggleChangeStyle ? styles.nav : styles.nav_style1}
        data-testid="main"
      >
        <div className={styles.link}>
          <A href="/" text={t.login}></A>
          <A href="/registration" text={t.registration}></A>
        </div>
        <div className={styles.settings}>
          <button
            onClick={onChangeStyles}
            className={
              !props.toggleChangeStyle
                ? styles.settings_style1
                : styles.settings_style
            }
          >
            {t.style}
          </button>
          <select
            onChange={(e) => handleChangeLang(e.target.value)}
            className={
              !props.toggleChangeStyle ? styles.locales_sryle1 : styles.locales
            }
          >
            <option
              value="ru"
              className={
                !props.toggleChangeStyle ? styles.locale1 : styles.locale
              }
            >
              Русский
            </option>
            <option
              value="en"
              className={
                !props.toggleChangeStyle ? styles.locale1 : styles.locale
              }
            >
              English
            </option>
            <option
              value="cs"
              className={
                !props.toggleChangeStyle ? styles.locale1 : styles.locale
              }
            >
              Čeština
            </option>
          </select>
        </div>
      </header>
      <div>{props.children}</div>
    </>
  );
};

export default MainContainer;
