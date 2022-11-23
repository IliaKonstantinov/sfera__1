import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/A.module.css";

export default function A({ text, href }) {
  const { pathname } = useRouter();

  return (
      <Link
        className={pathname == href ? styles.active : styles.link_wrapper}
        href={href}
      >
        <div className={styles.link}>{text}</div>
      </Link>
  );
}
