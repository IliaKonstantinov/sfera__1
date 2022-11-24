import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/A.module.css";
import { connect, useDispatch, useSelector } from "react-redux";

function A({ text, href, toggleChangeStyle }) {
  const { pathname } = useRouter();

  return (
      <Link
        className={pathname == href ? styles.active : styles.link_wrapper}
        href={href}
      >
        <div className={!toggleChangeStyle ? styles.link_style1 : styles.link}>{text}</div>
      </Link>
  );
}

let mapStateToProps = (state) => ({
  toggleChangeStyle: state.mainPage.toggleChangeStyle,
});

export default connect(mapStateToProps, {})(A);
