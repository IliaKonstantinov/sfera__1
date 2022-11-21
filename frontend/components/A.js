import Link from "next/link";
import style from "../styles/A.module.css";

export default function A({ text, href }) {
  return (
    <div className={style.link}>
      <Link href={href}>{text}</Link>
    </div>
  );
}
  
