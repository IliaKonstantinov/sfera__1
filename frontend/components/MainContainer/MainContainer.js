import Head from "next/head";
import A from "../A";
import styles from "../../styles/MainContainer.module.scss";
import { useRouter } from "next/router";
import { en, ru, cs } from "../../translations";
import { useEffect, useRef } from "react";
import { changeStyle1, changeStyle2 } from "../redux/main-reducer";
import { useDispatch, useSelector } from "react-redux";

const MainContainer = (props) => {
  const dispatch = useDispatch();
  const stylesArray = useSelector((state) => state.mainPage.stylesArray);
  const toggleChangeStyle = useSelector(
    (state) => state.mainPage.toggleChangeStyle
  );
  const languagesArray = useSelector((state) => state.mainPage.languagesArray);

  const router = useRouter();
  let langSelect = useRef();
  let styleSelect = useRef();

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
    if (
      window.localStorage.getItem("lang") === "null" ||
      window.localStorage.getItem("lang") !== lang
    ) {
      window.localStorage.setItem("lang", lang);
    }
    router.push(router.pathname, router.pathname, { locale: lang });
  };

  const handleChangeStyle = (style) => {
    window.localStorage.setItem("style", style);
    switch (style) {
      case "style1":
        dispatch(changeStyle2());
        break;
      case "style2":
        dispatch(changeStyle1());
    }
  };

  useEffect(() => {
    let lang = window.localStorage.getItem("lang");
    let style = window.localStorage.getItem("style");
    if (lang === null) {
      window.localStorage.setItem("lang", "null");
    }
    if (style === null) {
      window.localStorage.setItem("style", "null");
    }
    if (lang !== "null") {
      handleChangeLang(lang);
      langSelect.current.value = lang;
    }
    if (style !== "null") {
      handleChangeStyle(style);
      styleSelect.current.value = style;
    }
  }, []);

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={`Auth-project` + props.description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={props.keywords || "Authorization"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header
        className={!toggleChangeStyle ? styles.nav : styles.nav_style1}
        data-testid="main"
      >
        <div className={styles.link}>
          <A href="/" text={t.login}></A>
          <A href="/registration" text={t.registration}></A>
        </div>
        <div className={styles.settings}>
          <select
            onChange={(e) => handleChangeStyle(e.target.value)}
            className={
              !toggleChangeStyle ? styles.locales_sryle1 : styles.locales
            }
            ref={styleSelect}
          >
            {stylesArray.map((st) => (
              <option
                value={st.value}
                className={styles.settings_style}
                key={st.id}
              >
                {t.style} {st.id}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => handleChangeLang(e.target.value)}
            className={
              !toggleChangeStyle ? styles.locales_sryle1 : styles.locales
            }
            ref={langSelect}
          >
            {languagesArray.map((st) => (
              <option
                value={st.value}
                className={!toggleChangeStyle ? styles.locale1 : styles.locale}
                key={st.id}
              >
                {st.text}
              </option>
            ))}
          </select>
        </div>
      </header>
      <div>{props.children}</div>
    </>
  );
};

export default MainContainer;
