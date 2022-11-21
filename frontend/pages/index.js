import styles from "../styles/Home.module.css";
import Login from "../components/Login";
import MainContainer from "../components/MainContainer";

export default function Home() {
  return (
    <MainContainer title="Login" className={styles.container}>
      <main className={styles.main}>
        <div className={styles.text}>Login</div>
        <Login />
      </main> 
      <footer className={styles.footer}></footer>
    </MainContainer> 
  );
}
